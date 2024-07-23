import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Products, ProductDetail, Cart, ErrorPage } from "./index";
import { Layout } from "@/components/layout/layout";
import { Login } from "./login";
import { Register } from "./register";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "home",
        errorElement: <ErrorPage />,
        loader: Home.loader,
      },
      {
        path: "products",
        errorElement: <ErrorPage />,
        children: [
          {
            element: <Products />,
            index: true,
            loader: Products.loader,
          },
          {
            element: <ProductDetail />,
            index: false,
            path: ":slug",
            loader: ProductDetail.loader,
            action: ProductDetail.action,
          },
        ],
      },
      {
        element: <Cart />,
        path: "cart",
        errorElement: <ErrorPage />,
      },
      {
        element: <Login />,
        path: "login",
        errorElement: <ErrorPage />,
      },
      {
        element: <Register />,
        path: "register",
        errorElement: <ErrorPage />,
      },
      {
        element: <ErrorPage />,
        path: "error",
      },
      {
        element: <Navigate to={"/error"} replace />,
        path: "*",
      },
      {
        element: <Navigate to={"/home"} replace />,
        path: "/",
      },
    ],
  },
]);
