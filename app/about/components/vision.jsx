import React from "react";

const vision = ({ BASE }) => {
  const BANNER_BG = `${BASE}/vision/about-us-banner.webp`;
  return (
    <section
      className="w-full py-32 md:py-40"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(8,47,88,0.88), rgba(8,47,88,0.88)), url(${BANNER_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-2xl font-normal mb-3" style={{ color: "#7c98cd" }}>
          our vision
        </p>
        <p className="text-white text-3xl md:text-4xl font-bold leading-snug">
          Empower every professional to reach their highest potential
        </p>
        <p className="text-white text-3xl md:text-4xl font-bold leading-snug">
          through world-class learning.
        </p>
      </div>
    </section>
  );
};

export default vision;
