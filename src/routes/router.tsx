import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} replace />,
  },
]);
