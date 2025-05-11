import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export function Navbar({ menuItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tenMentor = menuItems.find((item) => item.title === "Ten Mentor");

  return (
    <nav className="bg-gradient-to-r from-[#bc6c25] via-[#e07b28] to-[#bc6c25] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Logo} alt="Logo" className="w-12 h-auto md:w-14" />
            <Link
              to="/"
              className="text-xl sm:text-2xl font-semibold text-white hover:text-[#e07b28] transition duration-300"
            >
              TEN-Incubation
            </Link>
          </motion.div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/about"
                className="text-sm sm:text-base font-medium text-white hover:text-[#e07b28] transition duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm sm:text-base font-medium text-white hover:text-[#e07b28] transition duration-300"
              >
                Contact
              </Link>
              {tenMentor && (
                <a
                  href={tenMentor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-white hover:text-[#e07b28] transition duration-300"
                >
                  Ten Mentor
                </a>
              )}
            </motion.div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#e07b28] hover:bg-[#a75f20] transition duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`sm:hidden bg-[#bc6c25] ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-3 pb-4 space-y-1">
          <Link
            to="/about"
            className="block px-4 py-2 text-base font-medium text-white hover:text-[#e07b28] hover:bg-[#a75f20] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-base font-medium text-white hover:text-[#e07b28] hover:bg-[#a75f20] transition duration-300"
          >
            Contact
          </Link>
          {tenMentor && (
            <a
              href={tenMentor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-base font-medium text-white hover:text-[#e07b28] hover:bg-[#a75f20] transition duration-300"
            >
              Ten Mentor
            </a>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
