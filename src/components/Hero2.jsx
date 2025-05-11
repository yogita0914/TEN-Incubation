import React from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Lightbulb } from "lucide-react";

export function Hero2() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#fff6ed] to-[#fef9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Lightbulb className="w-12 h-12 mb-4 text-[#bc6c25]" />
              <h3 className="text-4xl font-extrabold mb-2 text-[#bc6c25]">
                150+
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Startups Supported
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <DollarSign className="w-12 h-12 mb-4 text-[#bc6c25]" />
              <h3 className="text-4xl font-extrabold mb-2 text-[#bc6c25]">
                $5M+
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Funding Raised
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Users className="w-12 h-12 mb-4 text-[#bc6c25]" />
              <h3 className="text-4xl font-extrabold mb-2 text-[#bc6c25]">
                200+
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Mentors & Experts
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
