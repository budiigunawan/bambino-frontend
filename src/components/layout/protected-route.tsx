import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteParams = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteParams) => {
  // TODO: CHANGE TO DYNAMIC VALUE
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
