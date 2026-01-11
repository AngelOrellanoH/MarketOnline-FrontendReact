import { useAuth } from "@/context/authContext";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;