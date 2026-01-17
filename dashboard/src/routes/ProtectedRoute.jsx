import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/checkAuth", { withCredentials: true })
      .then((res) => setAuthenticated(res.data.authenticated))
      .catch(() => setAuthenticated(false));
  }, []);

  if (authenticated === null) return <div>Loading...</div>;
  if (!authenticated) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
