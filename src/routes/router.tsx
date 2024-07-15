import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { ErrorPage } from "@/pages/error";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/error"} replace />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} replace />,
  },
]);
