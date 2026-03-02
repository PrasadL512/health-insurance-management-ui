import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  getRoles,
  getUsers,
  toggleUserStatus,
  createUser,
} from "../../api/adminApi";

const PAGE_SIZE = 10;

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [togglingId, setTogglingId] = useState(null);

  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    roleId: "",
  });

  /* ===== DATE FORMATTER (21 Feb 2026) ===== */

  const formatDateTime = (dateString) => {
    if (!dateString) return "-";

    const date = new Date(dateString);

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  /* ===== LOAD DATA ===== */

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const [usersData, rolesData] = await Promise.all([
        getUsers(),
        getRoles(),
      ]);

      setUsers(usersData);
      setRoles(rolesData);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedRole]);

  /* ===== CREATE USER ===== */

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError("");

    if (!newUser.username || !newUser.password || !newUser.roleId) {
      setError("All fields are required");
      return;
    }

    try {
      setCreating(true);

      await createUser({
        username: newUser.username.trim(),
        password: newUser.password,
        roleId: Number(newUser.roleId),
      });

      setShowModal(false);
      setNewUser({ username: "", password: "", roleId: "" });

      await loadData();
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to create user");
    } finally {
      setCreating(false);
    }
  };

  /* ===== TOGGLE STATUS ===== */

  const handleToggleStatus = async (id) => {
    try {
      setError("");
      setTogglingId(id);

      await toggleUserStatus(id);

      setUsers((prev) =>
        prev.map((u) =>
          u.userId === id ? { ...u, isActive: !u.isActive } : u
        )
      );
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update status");
    } finally {
      setTogglingId(null);
    }
  };

  /* ===== FILTERING ===== */

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.username?.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        selectedRole === "" || user.role === selectedRole;

      return matchesSearch && matchesRole;
    });
  }, [users, search, selectedRole]);

  /* ===== PAGINATION ===== */

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredUsers.slice(start, start + PAGE_SIZE);
  }, [filteredUsers, currentPage]);

  /* ===== RENDER ===== */

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add User
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">All Roles</option>
          {roles.map((role) => (
            <option key={role.roleId} value={role.roleName}>
              {role.roleName}
            </option>
          ))}
        </select>
      </div>

      {/* Error */}
      {error && <div className="mb-4 text-red-600">{error}</div>}

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Created</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="5" className="py-16 text-center text-gray-500">
                  Loading users...
                </td>
              </tr>
            )}

            {!loading &&
              paginatedUsers.map((user) => (
                <tr key={user.userId} className="border-b">
                  <td className="px-6 py-4">{user.username}</td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        user.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    {formatDateTime(user.createdAt)}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      disabled={togglingId === user.userId}
                      onClick={() => handleToggleStatus(user.userId)}
                      className="hover:scale-110 transition"
                    >
                      {user.isActive ? "🚫" : "✅"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default UserManagement;