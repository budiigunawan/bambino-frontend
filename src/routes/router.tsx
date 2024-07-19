import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Products, ProductDetail, ErrorPage } from "./index";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    loader: Home.loader,
  },
  {
    path: "/products",
    element: <Products />,
    loader: Products.loader,
  },
  {
    path: "/products/:slug",
    element: <ProductDetail />,
    loader: ProductDetail.loader,
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
