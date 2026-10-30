import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Barra o acesso à área restrita quando não há sessão ativa
export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
