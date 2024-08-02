import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home, Products, ProductDetail, Cart, ErrorPage } from "./index";
import { Layout } from "@/components/layout/layout";
import { Login } from "./login";
import { Register } from "./register";
import { Profile } from "./profile";
import { ProtectedRoute } from "@/components/layout/protected-route";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
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
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
        path: "cart",
        errorElement: <ErrorPage />,
        loader: Cart.loader,
      },
      {
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        path: "profile",
        errorElement: <ErrorPage />,
        loader: Profile.loader,
      },
      {
        element: <Login />,
        path: "login",
        errorElement: <ErrorPage />,
        action: Login.action,
      },
      {
        element: <Register />,
        path: "register",
        errorElement: <ErrorPage />,
        action: Register.action,
      },
      {
        element: <ErrorPage />,
        path: "error",
      },
      {
        element: <Navigate to={"/error"} replace />,
        path: "*",
      },
    ],
  },
]);
