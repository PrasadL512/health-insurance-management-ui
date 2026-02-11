import AdminLayout from "../../components/layout/AdminLayout";

/* Dummy Claims Data */
const claims = [
  {
    id: "CLM-001",
    name: "John Doe",
    provider: "City Hospital",
    amount: "$2,500",
    date: "2026-02-01",
    status: "Pending",
  },
  {
    id: "CLM-002",
    name: "Jane Smith",
    provider: "MediCare Clinic",
    amount: "$1,200",
    date: "2026-01-31",
    status: "Approved",
  },
  {
    id: "CLM-003",
    name: "Mike Johnson",
    provider: "HealthPlus Center",
    amount: "$3,800",
    date: "2026-01-30",
    status: "Approved",
  },
  {
    id: "CLM-004",
    name: "Sarah Williams",
    provider: "City Hospital",
    amount: "$950",
    date: "2026-01-29",
    status: "Rejected",
  },
  {
    id: "CLM-005",
    name: "Tom Brown",
    provider: "Express Care",
    amount: "$1,500",
    date: "2026-01-28",
    status: "Pending",
  },
];

/* Main Page */
const ClaimsReview = () => {
  return (
    <AdminLayout>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Claims Review</h1>

      {/* Search + Filter */}
      <div className="bg-white border rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by Claim ID or Employee Name..."
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>

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
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3">Claim ID</th>
              <th className="text-left px-6 py-3">Employee Name</th>
              <th className="text-left px-6 py-3">Provider</th>
              <th className="text-left px-6 py-3">Claim Amount</th>
              <th className="text-left px-6 py-3">Submitted Date</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {claims.map((claim, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-6 py-4">{claim.id}</td>
                <td className="px-6 py-4">{claim.name}</td>
                <td className="px-6 py-4">{claim.provider}</td>
                <td className="px-6 py-4">{claim.amount}</td>
                <td className="px-6 py-4">{claim.date}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      claim.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : claim.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <button className="text-blue-600 text-lg">👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ClaimsReview;
