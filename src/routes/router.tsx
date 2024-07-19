import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Products, ProductDetail, ErrorPage } from "./index";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: Home.loader,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />,
    loader: Products.loader,
  },
  {
    path: "/products/:slug",
    element: <ProductDetail />,
    errorElement: <ErrorPage />,
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
