import { authCookie } from "@/lib/auth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteParams = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteParams) => {
  const token = authCookie.get("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
