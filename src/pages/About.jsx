import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-30 to-white">
      <section className="relative py-16 bg-gradient-to-b from-orange-200 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-[#bc6c25]">TEN-Incubation</span>
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              TEN-Incubation is a vibrant platform dedicated to empowering
              entrepreneurs and innovators. We provide the mentorship,
              resources, and collaborative ecosystem needed to transform bold
              ideas into thriving startups.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#faf0e6] to-[#f9e3d6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-orange-800">
                We envision a world where aspiring entrepreneurs have easy
                access to guidance, tools, and capital to nurture innovative
                ideas and solve real-world problems through impactful startups.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-orange-800 mb-6">
                TEN-Incubation bridges the gap between ideas and execution by
                offering mentorship, networking, workspace, and access to
                investors — empowering innovators to scale their ventures.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose TEN-Incubation?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We go beyond basic support — providing you with an end-to-end
              ecosystem to build, launch, and grow your startup with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mentorship",
                description:
                  "Access expert mentors from various industries to guide you through ideation, validation, and scaling.",
              },
              {
                name: "Networking",
                description:
                  "Connect with like-minded entrepreneurs, industry leaders, and investors to expand your horizons.",
              },
              {
                name: "Resources",
                description:
                  "Gain access to co-working spaces, legal support, marketing tools, and funding opportunities.",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="bg-orange-100 rounded-lg p-6 text-center shadow-lg"
              >
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-100 to-yellow-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shaping the Future of{" "}
              <span className="text-[#bc6c25]">Entrepreneurship</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At TEN-Incubation, we are committed to nurturing the next
              generation of changemakers. With a growing community and expanding
              resources, we are creating an ecosystem where innovation thrives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-200 transition-colors duration-300"
            >
              <a href="/learn-more">Join Us</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
