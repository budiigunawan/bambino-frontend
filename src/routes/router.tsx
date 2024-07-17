import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./home";
import { ErrorPage } from "@/routes/error";
import { Products } from "@/routes/products";
import { ProductDetail } from "@/routes/product-detail";

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
