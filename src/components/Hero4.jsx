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
              Discover how TEN Incubation empowered aspiring entrepreneurs with
              mentorship, resources, and a thriving startup ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg transition-transform duration-300 border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "TEN Incubation guided me from idea validation to investor
                pitch. The mentorship and resources were game-changing for my
                startup journey."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Himanshu</p>
              <p className="text-[#a65d20]">Aspiring Entrepreneur</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(188, 108, 37, 0.15)",
              }}
              className="bg-[#fff6ed] p-6 rounded-lg transition-transform duration-300 border border-[#f0e3d7]"
            >
              <p className="text-gray-700 italic mb-4">
                "With TEN’s ecosystem, I transformed my prototype into a
                market-ready product. The mentorship and funding network
                accelerated our success."
              </p>
              <p className="font-semibold text-[#bc6c25]">- Mounika</p>
              <p className="text-[#a65d20]">Startup Enthusiast</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
