// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer: React.FC = () => {
  const importantLinks = [
    { name: "Investor Centre", path: "/investor-centre" },
    { name: "Reports", path: "/reports" },
    { name: "Media", path: "/media" },
    { name: "Presentations", path: "/presentations" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Important Links */}
        <div>
          <div className="mb-6">
            <img
              src="/images/logo-white.png"
              alt="BRL Mining Exploration"
              className="h-12"
            />
          </div>
          {/* <h3 className="text-lg font-semibold mb-4">Important Links</h3> */}
          <ul className="space-y-2">
            {importantLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <address className="not-italic text-gray-300">
            Suite 1480, 885 West
            <br />
            Georgia Street
            <br />
            Vancouver, BC, Canada
            <br />
            V6C3E8
            <br />
            <br />
            (604) 506 2804
            <br />
            <a
              href="mailto:info@BRL Miningex.ca"
              className="text-gray-300 hover:text-white transition"
            >
              info@BRL Miningex.ca
            </a>
          </address>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to get news alerts and project updates.
          </p>
          <form className="flex flex-col space-y-4 mb-4">
            <label htmlFor="email" className="text-gray-400 text-sm">
              <span className="text-red-600">*</span> Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <button
              type="submit"
              className="bg-transparent text-white border border-secondary py-3 rounded hover:bg-secondary transition duration-100 text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
          <Socials color={true} />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BRL Mining Exploration Inc. All rights reserved.{" "}
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
