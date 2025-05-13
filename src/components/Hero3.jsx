import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export function Hero3({ featureCardRef }) {
  const scrollToFeatureCards = () => {
    const offset = 80;
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#fff6ed] to-[#fef9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Empower Your <span className="text-[#bc6c25]">Startup</span> with{" "}
            <span className="text-[#bc6c25]">TEN Incubation</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join a thriving network of founders, mentors, and investors.
            Accelerate your business with expert support, funding opportunities,
            and global exposure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#bc6c25] to-[#8B5CF6] text-white px-8 py-3  cursor-pointer rounded-full font-semibold text-lg shadow-md hover:bg-[#a65d20] transition-colors duration-300"
            onClick={scrollToFeatureCards}
          >
            <Link to="/contact">
              <button >
                Apply for Incubation
              </button>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
