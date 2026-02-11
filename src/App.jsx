import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import PolicyManagement from "./pages/admin/PolicyManagement";
import ClaimsReview from "./pages/admin/ClaimsReview";
import ProviderManagement from "./pages/admin/ProviderManagement";
import ReportsAnalytics from "./pages/admin/ReportsAnalytics";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import EmployeeLayout from "./components/layout/EmployeeLayout";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} /> 
        <Route path="/admin/policies" element={<PolicyManagement />} />
         <Route path="/admin/claims" element={<ClaimsReview />} />
         <Route path="/admin/providers" element={<ProviderManagement />} />
         <Route path="/admin/reports" element={<ReportsAnalytics />} /> 
  {/* employee  Routes */}
       {/* Employee Routes */}
<Route path="/employee" element={<EmployeeLayout />}>
  <Route path="dashboard" element={<EmployeeDashboard />} />
</Route>


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
