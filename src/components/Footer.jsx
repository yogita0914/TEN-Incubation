import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export function Footer({ menuItems = [] }) {
  return (
    <footer className="bg-gradient-to-r from-[#bc6c25] via-[#e07b28] to-[#bc6c25] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h4 className="text-xl font-semibold mb-4">About TEN-Incubation</h4>
            <p className="text-gray-200 leading-relaxed">
              TEN-Incubation is a dynamic platform that supports aspiring
              entrepreneurs by providing mentorship, resources, and a
              collaborative environment to transform innovative ideas into
              successful startups.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-200"
                    aria-label={`Visit ${item.title}`}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <motion.div
              className="text-gray-200 space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-4 flex space-x-4">
                <a
                  href="mailto:info@entrepreneurshipnetwork.net"
                  aria-label="Email"
                  className="hover:text-purple-300 transition-colors duration-200 text-xl"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-entrepreneurship-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-purple-300 transition-colors duration-200 text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-10 pt-8 border-t border-white text-center text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} TEN-Incubation. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
