import AdminLayout from "../../components/layout/AdminLayout";

const ReportsAnalytics = () => {
  return (
      <AdminLayout>
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold">Reports & Analytics</h1>

        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none">
            <option>Last Year</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Export Report
          </button>
        </div>
      </div>

      {/* Top Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6 h-72">
          <h2 className="font-medium mb-2">Claims by Month</h2>
        </div>

        <div className="bg-white border rounded-xl p-6 h-72">
          <h2 className="font-medium mb-2">Claim Amount by Month</h2>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Policy Legend */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              Basic Health Plan
            </span>

            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Premium Health Plan
            </span>

            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              Family Coverage Plan
            </span>

            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              Executive Plan
            </span>
          </div>
        </div>

        {/* Claim Status Summary */}
        <div className="bg-white border rounded-xl p-6 flex justify-around text-center">
          <div>
            <p className="text-green-600 text-2xl font-semibold">892</p>
            <p className="text-sm text-gray-600">Approved</p>
          </div>

          <div>
            <p className="text-yellow-500 text-2xl font-semibold">37</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>

          <div>
            <p className="text-red-500 text-2xl font-semibold">115</p>
            <p className="text-sm text-gray-600">Rejected</p>
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="bg-white border rounded-xl p-6">
        <h2 className="text-lg font-medium mb-6">Summary Statistics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-gray-500 text-sm">Total Claims (YTD)</p>
            <p className="text-2xl font-semibold">1,044</p>
            <p className="text-green-600 text-sm">↑ 12.5% vs last year</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Claims Approved</p>
            <p className="text-2xl font-semibold">85.4%</p>
            <p className="text-green-600 text-sm">↑ 3.2% vs last year</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Avg. Processing Time</p>
            <p className="text-2xl font-semibold">5.2 days</p>
            <p className="text-green-600 text-sm">↓ 1.1 days vs last year</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Payout (YTD)</p>
            <p className="text-2xl font-semibold">$1.9M</p>
            <p className="text-green-600 text-sm">↑ 15.8% vs last year</p>
          </div>
        </div>
      </div>

    </div>
    </AdminLayout>
  );
};

export default ReportsAnalytics;
