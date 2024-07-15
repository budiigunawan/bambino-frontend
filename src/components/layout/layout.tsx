import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <Navbar />
        <div className="min-h-[846px]">{children}</div>
      </div>
      <Footer />
    </>
  );
};
