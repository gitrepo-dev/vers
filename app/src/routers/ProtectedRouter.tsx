import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRouter() {
  const location = useLocation()
  const token = true
  return token ? <Outlet /> : <Navigate to="/" />
}