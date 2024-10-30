// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../assets/icons/logo.svg";
import Socials from "./Socials";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Company",
      dropdown: [
        { name: "About", path: "/about" },
        { name: "Management & Advisors", path: "/management" },
      ],
    },
    {
      name: "Projects",
      dropdown: [
        { name: "Summary", path: "/summary" },
        { name: "Gold Standard", path: "/gold-standard" },
        { name: "Miminiska", path: "/miminiska" },
        { name: "Keezhik", path: "/keezhik" },
        { name: "Attwood", path: "/attwood" },
        { name: "North Kimberley Diamond Project", path: "/north-kimberley" },
      ],
    },
    { name: "Investor Centre", path: "/investor-centre" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Contact", path: "/contact" },
  ];

  // Close menu on clicking outside the sidebar
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && target.classList.contains("overlay")) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-gray py-2 font-primary">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-24 py-3 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} width={200} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-end space-y-2">
          <Socials />

          {/* Navigation Links */}
          <div className="flex flex-row space-x-5 text-black">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <Link to="#" className="uppercase text-sm font-medium">
                    {link.name}
                  </Link>
                  <div className="absolute top-full left-0 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 invisible group-hover:visible z-10 w-max font-medium">
                    {link.dropdown.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.name}
                        to={dropdownLink.path}
                        className="block px-4 py-2 hover:bg-gray uppercase text-sm"
                      >
                        {dropdownLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium uppercase text-sm hover:text-indigo-600"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon icon={"line-md:menu"} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Full-Screen Menu with Overlay and Slide-In Effect */}
      {mobileMenuOpen && (
        <>
          {/* Overlay with Blur Effect */}
          <div className="fixed inset-0 z-40 bg-black bg-opacity-70 backdrop-blur-md overlay" />

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-7/12 bg-black text-white p-5 transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-8">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={Logo} width={150} alt="Logo" className="text-white" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl"
              >
                <Icon icon={"line-md:close"} />
              </button>
            </div>

            <div className="space-y-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="pb-4 border-b border-gray-700"
                  >
                    <p className="font-semibold text-lg">{link.name}</p>
                    <div className="pl-4 space-y-2 mt-2">
                      {link.dropdown.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.name}
                          to={dropdownLink.path}
                          className="block text-gray-400 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block font-semibold text-lg border-b border-gray-700 pb-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
