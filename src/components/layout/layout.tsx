import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollRestoration } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <div className="lg:min-h-[824px] min-h-[700px]">{children}</div>
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
