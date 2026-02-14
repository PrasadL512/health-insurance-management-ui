import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import PolicyManagement from "./pages/admin/PolicyManagement";
import ClaimsReview from "./pages/admin/ClaimsReview";
import ProviderManagement from "./pages/admin/ProviderManagement";
import ReportsAnalytics from "./pages/admin/ReportsAnalytics";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import PolicyEnrollment from "./pages/employee/PolicyEnrollment";
import SubmitClaim from "./pages/employee/SubmitClaim";
import ClaimHistory from "./pages/employee/ClaimHistory";
import PrivateRoute from "./routes/PrivateRoute";
import Forbidden from "./pages/Forbidden";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forbidden" element={<Forbidden />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute allowedRole="Admin">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute allowedRole="Admin">
              <UserManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/policies"
          element={
            <PrivateRoute allowedRole="Admin">
              <PolicyManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/claims"
          element={
            <PrivateRoute allowedRole="Admin">
              <ClaimsReview />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/providers"
          element={
            <PrivateRoute allowedRole="Admin">
              <ProviderManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <PrivateRoute allowedRole="Admin">
              <ReportsAnalytics />
            </PrivateRoute>
          }
        />

        {/* Employee Routes */}
        <Route
          path="/employee/dashboard"
          element={
            <PrivateRoute allowedRole="Employee">
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/policy-enrollment"
          element={
            <PrivateRoute allowedRole="Employee">
              <PolicyEnrollment />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/submit-claim"
          element={
            <PrivateRoute allowedRole="Employee">
              <SubmitClaim />
            </PrivateRoute>
          }
        />
        <Route
          path="/employee/claim-history"
          element={
            <PrivateRoute allowedRole="Employee">
              <ClaimHistory />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
