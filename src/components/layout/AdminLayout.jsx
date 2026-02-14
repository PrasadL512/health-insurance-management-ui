import { NavLink, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "Admin";
  const role = localStorage.getItem("role") || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6 border-b">
          <h1 className="text-xl font-semibold text-blue-600">HealthCare</h1>
          <p className="text-sm text-gray-500">Admin Portal</p>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            User Management
          </NavLink>

          <NavLink
            to="/admin/policies"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Policy Management
          </NavLink>

          <NavLink
            to="/admin/claims"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Claims Review
          </NavLink>

          <NavLink
            to="/admin/providers"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Provider Management
          </NavLink>

          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Reports & Analytics
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium">
              Welcome back, {username}
            </h2>
            <p className="text-sm text-gray-500">
              {role} Portal
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xl">🔔</span>

            {/* Profile */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                {username.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium">{username}</p>
                <p className="text-xs text-gray-500">{role}</p>
              </div>
            </div>

            {/* Logout Button */}
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

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
