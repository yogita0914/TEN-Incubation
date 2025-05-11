import React, { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { menuItems } from "../data/MenuItems";

function FeatureCardsList({ featureCardRef }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? menuItems : menuItems.slice(0, 6);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, index) => (
          <FeatureCard key={index} item={item} index={index} />
        ))}
      </div>

      {menuItems.length > 6 && !showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-[#bc6c25] to-[#8B5CF6] text-white py-2 px-6 rounded-full shadow hover:shadow-lg transition-all duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default FeatureCardsList;
