const RecentClaimsTable = () => {
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
          {[
            ["CLM-001", "John Doe", "City Hospital", "$2,500", "2026-02-01", "Pending"],
            ["CLM-002", "Jane Smith", "MediCare Clinic", "$1,200", "2026-01-31", "Approved"],
            ["CLM-003", "Mike Johnson", "HealthPlus Center", "$3,800", "2026-01-30", "Approved"],
          ].map((row, i) => (
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

export default RecentClaimsTable;
