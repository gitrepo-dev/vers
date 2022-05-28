import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function PublicRouter() {
  const token = true
  return token ? <Navigate to={`/home`} /> : <Outlet />
}