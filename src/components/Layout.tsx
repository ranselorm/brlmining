import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full mx-auto px-4 sm:px-4 md:px-24 bg-white">
    {children}
  </div>
);

const FooterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full mx-auto px-4 sm:px-6 md:px-24 py-4 md:py-10 footer">
    {children}
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
