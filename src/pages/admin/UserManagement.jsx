import AdminLayout from "../../components/layout/AdminLayout";

/* Dummy Users */
const users = [
  { username: "admin", role: "Admin", status: "active", date: "2025-01-15" },
  { username: "john.doe", role: "Employee", status: "active", date: "2025-06-20" },
  { username: "jane.smith", role: "Employee", status: "active", date: "2025-08-10" },
  { username: "mike.johnson", role: "Manager", status: "active", date: "2025-03-05" },
  { username: "sarah.williams", role: "Employee", status: "inactive", date: "2024-11-12" },
];

/* Table Component (inside same file) */
const UserTable = () => {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left px-6 py-3">Username</th>
            <th className="text-left px-6 py-3">Role</th>
            <th className="text-left px-6 py-3">Status</th>
            <th className="text-left px-6 py-3">Created Date</th>
            <th className="text-left px-6 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b last:border-none hover:bg-gray-50">
              <td className="px-6 py-4">{user.username}</td>

              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                  {user.role}
                </span>
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="px-6 py-4">{user.date}</td>

              <td className="px-6 py-4 flex gap-3">
                <button className="text-blue-600 hover:underline">✏️</button>

                {user.status === "active" ? (
                  <button className="text-red-500">🚫</button>
                ) : (
                  <button className="text-green-600">✅</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* Main Page */
const UserManagement = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <span className="text-lg">+</span>
          Add User
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        <select className="border rounded-lg px-4 py-2 w-full md:w-40">
          <option>All Roles</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>Employee</option>
        </select>
      </div>

      <UserTable />
    </AdminLayout>
  );
};

export default UserManagement;
