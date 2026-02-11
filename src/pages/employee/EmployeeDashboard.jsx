import EmployeeLayout from "../../components/layout/EmployeeLayout";

const EmployeeDashboard = () => {
  return (
    <EmployeeLayout>
      <h1 className="text-2xl font-semibold mb-6">Employee Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border rounded-xl p-6">
          <p className="text-gray-500 text-sm">Active Policy</p>
          <h2 className="text-2xl font-semibold">1</h2>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <p className="text-gray-500 text-sm">Pending Claims</p>
          <h2 className="text-2xl font-semibold">1</h2>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <p className="text-gray-500 text-sm">Approved Claims</p>
          <h2 className="text-2xl font-semibold">2</h2>
        </div>
      </div>

      {/* Policy Summary + Recent Claims */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Active Policy Summary */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Active Policy Summary</h3>
            <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
              Active
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500">Policy Name</p>
              <p className="font-medium">Premium Health Plan</p>
            </div>

            <div>
              <p className="text-gray-500">Policy Number</p>
              <p className="font-medium">POL-002-EMP-12345</p>
            </div>

            <div>
              <p className="text-gray-500">Coverage Amount</p>
              <p className="font-medium text-blue-600">$150,000</p>
            </div>

            <div>
              <p className="text-gray-500">Monthly Premium</p>
              <p className="font-medium">$500/month</p>
            </div>

            <div>
              <p className="text-gray-500">Validity Period</p>
              <p className="font-medium">2026-01-01 to 2026-12-31</p>
            </div>
          </div>
        </div>

        {/* Recent Claims */}
        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-lg font-medium mb-4">Recent Claims</h3>

          <div className="space-y-4 text-sm">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <p className="font-medium">CLM-007</p>
                <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                  Pending
                </span>
              </div>
              <p>Provider: City Hospital</p>
              <p>Claim Amount: $2,500</p>
              <p>Submitted: 2026-02-01</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <p className="font-medium">CLM-006</p>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  Approved
                </span>
              </div>
              <p>Provider: MediCare Clinic</p>
              <p>Claim Amount: $750</p>
              <p>Submitted: 2026-01-28</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Information */}
      <div className="bg-white border rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Coverage Information</h3>

        <table className="w-full text-sm">
          <thead className="border-b text-gray-600">
            <tr>
              <th className="text-left py-2">Service Type</th>
              <th className="text-left py-2">Coverage</th>
              <th className="text-left py-2">Co-pay / Coinsurance</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3">General Practitioner Visits</td>
              <td>Unlimited</td>
              <td>$25</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Specialist Consultations</td>
              <td>Unlimited</td>
              <td>$50</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Emergency Care</td>
              <td>Full Coverage</td>
              <td>$150</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Prescription Medications</td>
              <td>Tier 1-3</td>
              <td>$10-$50</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">Surgical Procedures</td>
              <td>80% Covered</td>
              <td>20% Coinsurance</td>
            </tr>

            <tr>
              <td className="py-3">Hospital Room</td>
              <td>Semi-Private</td>
              <td>$200/day</td>
            </tr>
          </tbody>
        </table>
      </div>
    </EmployeeLayout>
  );
};

export default EmployeeDashboard;
