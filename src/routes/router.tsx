import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Products, ProductDetail, Cart, ErrorPage } from "./index";

export const router = createBrowserRouter([
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
]);
