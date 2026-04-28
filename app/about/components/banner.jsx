import React from "react";

const banner = () => {
  return (
    <div className="w-full flex items-center gap-4 justify-between md:justify-center py-4 px-4 fixed top-0 h-14.25 md:h-15.25 bg-[rgb(237,239,242)] z-50">
      <h1 className="font-medium text-neutral-800 text-xs md:text-lg flex items-center gap-3">
        Navigate your ideal career path with tailored expert advice
        <button
          className="md:mx-2 font-medium text-nowrap hidden md:block"
          style={{ color: "#1a73e8" }}
        >
          contact expert
        </button>
      </h1>
      <button
        className="md:mx-2 font-semibold text-sm block md:hidden"
        style={{ color: "#1a73e8" }}
      >
        contact expert
      </button>
    </div>
  );
};

export default banner;
