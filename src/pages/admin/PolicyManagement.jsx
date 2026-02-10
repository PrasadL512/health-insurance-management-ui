import AdminLayout from "../../components/layout/AdminLayout";
import PolicyTable from "../../components/policies/PolicyTable";

const PolicyManagement = () => {
  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Policy Management</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <span className="text-lg">+</span>
          Add Policy
        </button>
      </div>

      {/* Table */}
      <PolicyTable />
    </AdminLayout>
  );
};

export default PolicyManagement;
