// src/pages/Opportunities.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaRocket, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Opportunities() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-200 to-yellow-100 starry-bg text-white">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />

      <div className="relative z-10 py-20 px-6 max-w-7xl mx-auto space-y-24">
        {/* Section 1 - Hero */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-800">
            Discover{" "}
            <span className="text-[#bc6c25]">Limitless Opportunities</span>
          </h1>
          <p className="text-lg text-gray-800 mt-4 max-w-2xl mx-auto">
            Unlock your potential with startup incubation, mentorship, and
            resources designed to fuel your success.
          </p>
        </motion.div>

        {/* Section 2 - What You’ll Gain */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#fff6ed] backdrop-blur-md p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            What You’ll Gain!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-gray-800 rounded-xl p-6 shadow-md"
            >
              <FaUserTie className="text-4xl text-[#bc6c25] mb-4" />
              <h3 className="text-xl font-bold mb-2">Mentorship Access</h3>
              <p className="text-sm">
                Get personalized guidance from startup veterans, investors, and
                industry leaders who’ve built scalable companies.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white text-gray-800 rounded-xl p-6 shadow-md"
            >
              <FaRocket className="text-4xl text-[#bc6c25] mb-4" />
              <h3 className="text-xl font-bold mb-2">Funding Opportunities</h3>
              <p className="text-sm">
                Learn to pitch your idea and connect directly with angel
                investors, VCs, and accelerator programs.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white text-gray-800 rounded-xl p-6 shadow-md"
            >
              <FaTools className="text-4xl text-[#bc6c25] mb-4" />
              <h3 className="text-xl font-bold mb-2">Startup Infrastructure</h3>
              <p className="text-sm">
                Use our fully equipped co-working space, access digital tools,
                and gain technical & legal resources.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 3 - Incubation Success Stories */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-[#bc6c25]">Incubation</span> Impact
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Over 100+ startups nurtured, 500+ professionals trained, and $2M+
            secured in funding through our ecosystem.
          </p>
        </motion.div>

        {/* Section 4 - Apply CTA */}
        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
          <h3 className="text-2xl text-gray-800 font-bold mb-4">
            Ready to Join?
          </h3>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#bc6c25] to-[#8B5CF6] text-white cursor-pointer hover:bg-[#d97706] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300">
              Apply for Incubation Now
            </button>
          </Link>
        </motion.div>

        {/* Section 5 - Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-sm text-gray-800">
            For any queries, contact us at{" "}
            <a
              href="mailto:info@entrepreneurshipnetwork.net"
              className="underline text-[#8B5CF6]"
            >
              Click Me
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
