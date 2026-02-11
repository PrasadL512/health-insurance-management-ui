import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Upload,
  History,
} from "lucide-react";

const EmployeeLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block h-full">
        <div className="p-6 border-b">
          <h1 className="text-xl font-semibold text-blue-600">HealthCare</h1>
          <p className="text-sm text-gray-500">Employee Portal</p>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/employee/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/employee/policy-enrollment"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <ClipboardList size={18} />
            Policy Enrollment
          </NavLink>

          <NavLink
            to="/employee/submit-claim"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Upload size={18} />
            Submit Claim
          </NavLink>

          <NavLink
            to="/employee/claim-history"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <History size={18} />
            Claim History
          </NavLink>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="text-lg font-medium">Welcome back, employee</h2>
            <p className="text-sm text-gray-500">Employee Portal</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                E
              </div>
              <div>
                <p className="text-sm font-medium">employee</p>
                <p className="text-xs text-gray-500">Employee</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Logout"
              className="text-gray-500 hover:text-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l5-5m0 0l-5-5m5 5H9"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
