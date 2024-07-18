import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Products, ProductDetail, ErrorPage } from "./index";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: Products.loader,
  },
  {
    path: "/products/:slug",
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
