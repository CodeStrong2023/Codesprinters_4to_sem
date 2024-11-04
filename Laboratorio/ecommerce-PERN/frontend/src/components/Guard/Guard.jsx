import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable react/prop-types */
export const Guard = ({ children, isAllowed, redirectTo }) => {
  if (!isAllowed) return <Navigate to={redirectTo} replace />;

  return children ? children : <Outlet />;
};
