const policies = [
  {
    id: "POL-001",
    name: "Basic Health Plan",
    coverage: "$50,000",
    premium: "$250/month",
    from: "2026-01-01",
    to: "2026-12-31",
    status: "active",
  },
  {
    id: "POL-002",
    name: "Premium Health Plan",
    coverage: "$150,000",
    premium: "$500/month",
    from: "2026-01-01",
    to: "2026-12-31",
    status: "active",
  },
  {
    id: "POL-003",
    name: "Family Coverage Plan",
    coverage: "$200,000",
    premium: "$750/month",
    from: "2026-01-01",
    to: "2026-12-31",
    status: "active",
  },
  {
    id: "POL-004",
    name: "Executive Plan",
    coverage: "$500,000",
    premium: "$1,200/month",
    from: "2026-01-01",
    to: "2026-12-31",
    status: "active",
  },
  {
    id: "POL-005",
    name: "Dental Add-on",
    coverage: "$10,000",
    premium: "$50/month",
    from: "2026-01-01",
    to: "2026-12-31",
    status: "active",
  },
  {
    id: "POL-006",
    name: "Vision Care Plan",
    coverage: "$5,000",
    premium: "$30/month",
    from: "2026-01-01",
    to: "2026-12-31",
    status: "inactive",
  },
];

const PolicyTable = () => {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left px-6 py-3">Policy ID</th>
            <th className="text-left px-6 py-3">Policy Name</th>
            <th className="text-left px-6 py-3">Coverage Amount</th>
            <th className="text-left px-6 py-3">Premium</th>
            <th className="text-left px-6 py-3">Valid From</th>
            <th className="text-left px-6 py-3">Valid To</th>
            <th className="text-left px-6 py-3">Status</th>
            <th className="text-left px-6 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {policies.map((policy, index) => (
            <tr
              key={index}
              className="border-b last:border-none hover:bg-gray-50"
            >
              <td className="px-6 py-4">{policy.id}</td>
              <td className="px-6 py-4">{policy.name}</td>
              <td className="px-6 py-4">{policy.coverage}</td>
              <td className="px-6 py-4">{policy.premium}</td>
              <td className="px-6 py-4">{policy.from}</td>
              <td className="px-6 py-4">{policy.to}</td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    policy.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {policy.status}
                </span>
              </td>

              <td className="px-6 py-4 flex gap-3">
                <button className="text-blue-600">✏️</button>
                <button className="text-red-500">🚫</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyTable;
