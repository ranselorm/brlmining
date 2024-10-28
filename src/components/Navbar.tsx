// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../assets/icons/logo.svg";

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

  return (
    <nav className="bg-gray-100 py-2 font-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <Link to="/" className="text-indigo-600">
            <img src={Logo} width={200} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col space-x-6 items-center text-black">
          {/* social */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={"ri:twitter-x-line"}
                className="text-gray-700 hover:text-indigo-600"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={"linkedinIcon"}
                className="text-gray-700 hover:text-indigo-600"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={"facebookIcon"}
                className="text-gray-700 hover:text-indigo-600"
              />
            </a>
          </div>
          <div>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <Link
                    to="#"
                    className="hover:text-indigo-600 uppercase text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                    {link.dropdown.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.name}
                        to={dropdownLink.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-indigo-600 hover:text-white"
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

          {/* Social Icons */}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon icon={"menuIcon"} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="border-b">
                <p className="px-4 py-2 font-semibold text-gray-700">
                  {link.name}
                </p>
                <div className="pl-4">
                  {link.dropdown.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.name}
                      to={dropdownLink.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-indigo-600 hover:text-white"
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
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-600 hover:text-white border-b"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
