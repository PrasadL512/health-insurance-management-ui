import { Outlet, Link } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-blue-600">
            HealthCare
          </h2>
          <p className="text-xs text-gray-500">
            Employee Portal
          </p>
        </div>

        <nav className="p-4 space-y-3">
          <Link
            to="/employee/dashboard"
            className="block px-3 py-2 rounded bg-blue-50 text-blue-600 font-medium"
          >
            Dashboard
          </Link>

          <p className="px-3 py-2 text-gray-600">Policy Enrollment</p>
          <p className="px-3 py-2 text-gray-600">Submit Claim</p>
          <p className="px-3 py-2 text-gray-600">Claim History</p>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1">

        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex justify-between">
          <div>
            <p className="text-gray-600 text-sm">
              Welcome back, User
            </p>
            <h1 className="font-semibold">
              Employee Portal
            </h1>
          </div>

          <div className="text-sm text-gray-600">
            Employee
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default EmployeeLayout;
