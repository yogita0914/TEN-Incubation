import React from "react";
import { motion } from "framer-motion";

export function Hero4() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-200 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Success Stories from{" "}
              <span className="text-[#bc6c25]">Our Innovators</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how TEN Incubation empowered aspiring leaders with
              mentorship, resources, and a thriving startup ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "At <strong>InnoTech Studio</strong>, the support from TEN
                helped me turn a raw idea into a scalable product loved by
                thousands."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Prince</p>
              <p className="text-[#a65d20]">Chief of Staff</p>
            </motion.div>

            {/* 2 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "With <strong>AI Consulting Labs</strong>, TEN gave me the
                clarity to solve real-world problems through AI and data-driven
                strategies."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Himanshu</p>
              <p className="text-[#a65d20]">Chief of Staff</p>
            </motion.div>

            {/* 3 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "At <strong>Fitverse</strong>, the TEN journey turned me into a
                product-first thinker ready to lead in the health tech space."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Mounika</p>
              <p className="text-[#a65d20]">Chief of Staff</p>
            </motion.div>

            {/* 4 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "Thanks to <strong>Agentic AI</strong>, I moved from technical
                operations to driving strategic initiatives as a CoS."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Anurag</p>
              <p className="text-[#a65d20]">Chief of Staff</p>
            </motion.div>

            {/* 5 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "With <strong>HR Consulting Alliance</strong>{" "}
                empowered me to reshape workplace culture and drive innovation
                at scale."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Yogita</p>
              <p className="text-[#a65d20]">Chief of Staff</p>
            </motion.div>

            {/* 6 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "Joining <strong>SkillForge</strong> through TEN allowed me to
                mentor teams, build processes, and create long-term value."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Jay</p>
              <p className="text-[#a65d20]">Chief of Staff</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
