import React from "react";
import { motion } from "framer-motion";

export function Hero({ featureCardRef }) {
  const scrollToHero2 = () => {
    const offset = 80;
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-gradient-to-b from-orange-200 to-yellow-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empowering <span className="text-[#bc6c25]">Innovators</span>,
          <br /> Accelerating <span className="text-[#bc6c25]">Startups</span>
        </motion.h1>

        <motion.p
          className="text-xl mt-6 max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TEN Incubation helps aspiring entrepreneurs transform ideas into
          thriving businesses with expert mentorship, funding access, co-working
          spaces, and a dynamic community.
        </motion.p>

        <motion.p
          className="text-lg mt-4 max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          From ideation to launch, we provide tailored support, industry
          connections, and resources that accelerate your startup journey and
          maximize your success.
        </motion.p>

        <motion.button
          className="mt-10 bg-gradient-to-r from-[#bc6c25] to-[#8B5CF6] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#a75f20] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToHero2}
        >
          Explore Opportunities
        </motion.button>
      </div>
    </header>
  );
}
