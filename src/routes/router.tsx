import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { ErrorPage } from "@/pages/error";
import { Products } from "@/pages/products";
import { ProductDetail } from "@/pages/product-detail";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
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
