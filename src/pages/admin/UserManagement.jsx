import AdminLayout from "../../components/layout/AdminLayout";
import UserTable from "../../components/users/UserTable";

const UserManagement = () => {
  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">User Management</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <span className="text-lg">+</span>
          Add User
        </button>
      </div>

      {/* Search & Filter */}
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

      {/* Table */}
      <UserTable />
    </AdminLayout>
  );
};

export default UserManagement;
