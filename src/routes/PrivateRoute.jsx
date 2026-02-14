import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role mismatch
 if (allowedRole && role !== allowedRole) {
  return <Navigate to="/forbidden" replace />;
}


  return children;
};

export default PrivateRoute;
