import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { LoadingLayout } from "./loading-layout";
import { Toaster } from "../ui/toaster";

export const Layout = () => {
  const { state } = useNavigation();

  if (state === "loading") {
    return <LoadingLayout />;
  }

  return (
    <>
      <Navbar />
      <main className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto lg:min-h-[824px] min-h-[700px]">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </>
  );
};
