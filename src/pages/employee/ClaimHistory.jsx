import EmployeeLayout from "../../components/layout/EmployeeLayout";

const claims = [
  {
    id: "CLM-007",
    provider: "City Hospital",
    claim: "$2,500",
    approved: "-",
    date: "2026-02-01",
    status: "Pending",
  },
  {
    id: "CLM-006",
    provider: "MediCare Clinic",
    claim: "$750",
    approved: "$750",
    date: "2026-01-27",
    status: "Approved",
  },
  {
    id: "CLM-005",
    provider: "HealthPlus Center",
    claim: "$1,200",
    approved: "$1,200",
    date: "2026-01-20",
    status: "Approved",
  },
  {
    id: "CLM-004",
    provider: "Express Care",
    claim: "$450",
    approved: "-",
    date: "2026-01-12",
    status: "Rejected",
  },
];

const ClaimHistory = () => {
  return (
    <EmployeeLayout>
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Claim History</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Export Claims
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white border rounded-xl p-4 mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by Claim ID or Provider..."
          className="flex-1 border rounded-lg px-4 py-2"
        />

        <select className="border rounded-lg px-4 py-2">
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3">Claim ID</th>
              <th className="text-left px-6 py-3">Provider</th>
              <th className="text-left px-6 py-3">Claim Amount</th>
              <th className="text-left px-6 py-3">Approved Amount</th>
              <th className="text-left px-6 py-3">Submitted Date</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {claims.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{c.id}</td>
                <td className="px-6 py-4">{c.provider}</td>
                <td className="px-6 py-4">{c.claim}</td>
                <td className="px-6 py-4">{c.approved}</td>
                <td className="px-6 py-4">{c.date}</td>

                {/* Status Badge */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      c.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : c.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-blue-600 text-lg">
                  👁️
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </EmployeeLayout>
  );
};

export default ClaimHistory;
