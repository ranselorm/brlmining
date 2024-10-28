// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

type NavLink = {
  title: string;
  link: string;
  dropdown?: { title: string; link: string }[];
};

const navLinks: NavLink[] = [
  { title: "HOME", link: "/home" },
  {
    title: "ABOUT US",
    link: "/about",
    dropdown: [
      { title: "About Breakthrough", link: "/resources/1" },
      { title: "Management", link: "/resources/2" },
      { title: "Board of directors", link: "/resources/2" },
      { title: "Value proposition", link: "/resources/2" },
      { title: "Health and safety", link: "/resources/2" },
      { title: "Careers", link: "/resources/2" },
    ],
  },
  { title: "OPERATIONS", link: "/operations" },
  {
    title: "RESOURCES",
    link: "/resources",
  },
  {
    title: "INVESTOR RELATIONS",
    link: "/investor-relations",
    dropdown: [
      { title: "Overview", link: "/investor-relations/overview" },
      { title: "Market Data", link: "/investor-relations/market-data" },
      { title: "Compliance", link: "/investor-relations/compliance" },
      {
        title: "Analyst Coverage",
        link: "/investor-relations/analyst-coverage",
      },
    ],
  },
  { title: "CONTACT US", link: "/contact" },
];

const topButtons = [
  { title: "HEALTH & SAFETY", link: "/health-safety" },
  { title: "VALUE PROPOSITION", link: "/value-proposition" },
  { title: "MARKET DATA", link: "/market-data" },
];

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  return (
    <header className="text-white font-sans">
      {/* Top overlapping buttons */}
      <div className="flex justify-end relative w-full mx-auto px-4 sm:px-6 md:px-28 bg-white">
        {topButtons.map((button, idx) => (
          <Link
            key={idx}
            to={button.link}
            className={`px-3 py-1 text-[8px] transition duration-200 font-sans ${
              button.title === "VALUE PROPOSITION"
                ? "bg-primary text-white z-10 py-1 px-4 shadow-lg h-10 rounded-b-lg flex items-center justify-center"
                : "bg-[#858080] text-white h-8 flex items-center"
            }`}
            style={{
              position:
                button.title === "VALUE PROPOSITION" ? "relative" : "initial",
            }}
          >
            {button.title}
          </Link>
        ))}
      </div>

      <div className="text-black">
        <div className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 md:px-28">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-16 md:w-32" />
          </Link>
          <div className="text-sm">
            <p>(+233) 302-543-667</p>
            <p>info@BRLmining.com</p>
          </div>
        </div>

        {/* Mobile menu button */}
        <div>
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(isDropdownOpen ? null : "")}
              className="hover:text-gray-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isDropdownOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center space-x-1 bg-primary w-full mx-auto px-4 sm:px-6 md:px-32 text-white text-sm mt-4 h-12">
            {navLinks.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(item.title)}
                onMouseLeave={() => setIsDropdownOpen(null)}
              >
                <Link
                  to={item.link}
                  className="text-xs font-bold transition duration-200 border-b-4 border-secondary py-[12px] px-12 flex items-center gap-x-3"
                >
                  {item.title}
                  {item.dropdown && (
                    <Icon icon="teenyicons:down-solid" width={8} />
                  )}
                </Link>
                {item.dropdown && isDropdownOpen === item.title && (
                  <div
                    className="absolute left-0 bg-primary text-white rounded-md shadow-lg w-60 z-10 py-2 px-1"
                    style={{ top: "100%", pointerEvents: "auto" }}
                  >
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.link}
                        className="block px-4 py-[10px] text-xs hover:bg-secondary border-b transition duration-200 uppercase"
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden bg-brown-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item, idx) => (
              <div key={idx} className="relative">
                <Link
                  to={item.link}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-brown-600"
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.link}
                        className="block px-3 py-2 text-sm text-white hover:bg-brown-600"
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
