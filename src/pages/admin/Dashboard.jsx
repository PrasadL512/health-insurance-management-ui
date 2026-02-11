import AdminLayout from "../../components/layout/AdminLayout";

/* Stat Card Component */
const StatCard = ({ icon, value, label, change, positive }) => {
  return (
    <div className="bg-white rounded-xl p-5 border flex justify-between items-start">
      <div>
        <div className="text-2xl font-semibold">{value}</div>
        <p className="text-sm text-gray-500">{label}</p>
      </div>

      <div className="text-right">
        <div className="mb-2">{icon}</div>
        <p className={`text-sm ${positive ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
      </div>
    </div>
  );
};

/* Recent Claims Table */
const RecentClaimsTable = () => {
  const claims = [
    ["CLM-001", "John Doe", "City Hospital", "$2,500", "2026-02-01", "Pending"],
    ["CLM-002", "Jane Smith", "MediCare Clinic", "$1,200", "2026-01-31", "Approved"],
    ["CLM-003", "Mike Johnson", "HealthPlus Center", "$3,800", "2026-01-30", "Approved"],
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Recent Claims</h3>
        <button className="text-blue-600 text-sm">View All</button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-2">Claim ID</th>
            <th className="text-left py-2">User</th>
            <th className="text-left py-2">Provider</th>
            <th className="text-left py-2">Amount</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {claims.map((row, i) => (
            <tr key={i} className="border-b last:border-none">
              {row.map((cell, idx) => (
                <td key={idx} className="py-3">
                  {idx === 5 ? (
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        cell === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* Main Dashboard */
const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard value="245" label="Total Policies" change="↑ 12%" positive />
        <StatCard value="1,842" label="Active Users" change="↑ 8%" positive />
        <StatCard value="37" label="Pending Claims" change="↓ 5%" />
        <StatCard value="892" label="Approved Claims" change="↑ 15%" positive />
      </div>

      <RecentClaimsTable />
    </AdminLayout>
  );
};

export default Dashboard;
