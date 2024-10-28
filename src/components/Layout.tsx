import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import Footer from "./Footer";

const LayoutContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full mx-auto px-4 sm:px-4 md:px-32 bg-white">
    {children}
  </div>
);

const FooterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full mx-auto px-4 sm:px-6 md:px-32 py-4 md:py-10 footer">
    {children}
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="border-t-[10px] border-yellow-800 text-white font-sans sticky top-0 z-50 bg-white">
        <Navbar />
        {/* <LayoutContainer>
          <p>k</p>
        </LayoutContainer> */}
      </header>
      <main className="w-full">
        <Hero />
        <LayoutContainer>{children}</LayoutContainer>
      </main>
      <footer>
        <FooterLayout>
          {/* <Footer /> */}
          <p>footer</p>
        </FooterLayout>
      </footer>
    </div>
  );
};

export default Layout;
