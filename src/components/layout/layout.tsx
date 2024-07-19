import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import { usePageStore } from "@/stores/page";

export const Layout = () => {
  const { pageLoaded } = usePageStore();
  const { togglePageLoaded } = usePageStore();

  useEffect(() => {
    togglePageLoaded();
  }, [togglePageLoaded]);

  return (
    <>
      <Navbar />
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <div className="lg:min-h-[824px] min-h-[700px]">
          {pageLoaded ? <Outlet /> : <p>Loading....</p>}
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
