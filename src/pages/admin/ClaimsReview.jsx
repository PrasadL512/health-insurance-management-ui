import AdminLayout from "../../components/layout/AdminLayout";
import ClaimsTable from "../../components/claims/ClaimsTable";

const ClaimsReview = () => {
  return (
    <AdminLayout>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Claims Review</h1>

      {/* Search & Filter */}
      <div className="bg-white border rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between">
        {/* Search */}
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by Claim ID or Employee Name..."
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-xl">⚲</span>
          <select className="border rounded-lg px-4 py-2">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <ClaimsTable />
    </AdminLayout>
  );
};

export default ClaimsReview;
