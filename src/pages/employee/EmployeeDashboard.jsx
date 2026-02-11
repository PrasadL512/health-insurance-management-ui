const EmployeeDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Employee Dashboard
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Active Policy</p>
          <h3 className="text-2xl font-bold">1</h3>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Pending Claims</p>
          <h3 className="text-2xl font-bold">1</h3>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Approved Claims</p>
          <h3 className="text-2xl font-bold text-green-600">2</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">

        {/* Policy Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">
            Active Policy Summary
          </h3>

          <p className="text-gray-500">Policy Name</p>
          <p className="mb-3 font-medium">
            Premium Health Plan
          </p>

          <p className="text-gray-500">Policy Number</p>
          <p className="mb-3 font-medium">
            POL-002-EMP-12345
          </p>

          <p className="text-gray-500">Coverage Amount</p>
          <p className="text-blue-600 font-semibold">
            $150,000
          </p>
        </div>

        {/* Recent Claims */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">
            Recent Claims
          </h3>

          <div className="border rounded p-4 mb-3">
            <p className="font-medium">CLM-007</p>
            <p className="text-sm text-gray-500">
              Provider: City Hospital
            </p>
            <p>$2,500</p>
          </div>

          <div className="border rounded p-4">
            <p className="font-medium">CLM-006</p>
            <p className="text-sm text-gray-500">
              Provider: MediCare Clinic
            </p>
            <p>$750</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmployeeDashboard;
