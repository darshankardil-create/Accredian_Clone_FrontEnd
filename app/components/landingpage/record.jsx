import React from "react";

const record = () => {
  return (
    <div
      id="stats"
      className="w-full flex flex-col items-center mt-8 sm:mt-28 px-4 capitalize"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-universal">Track Record</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          The Numbers Behind <span className="text-universal">Our Success</span>
        </p>
      </div>
      {/* Desktop */}
      <div className="hidden sm:flex justify-start p-4 gap-10 rounded-xl text-center">
        {[
          {
            num: "10K+",
            desc: "Professionals trained for exceptional career success",
          },
          {
            num: "200+",
            desc: "Sessions delivered with unmatched learning excellence",
          },
          {
            num: "5K+",
            desc: "Active learners engaged in dynamic courses",
            last: true,
          },
        ].map(({ num, desc, last }) => (
          <div
            key={num}
            className={`flex flex-col items-center gap-4 pr-4 ${!last && "border-r-2"}`}
          >
            <div className="text-2xl text-universal font-semibold w-24 bg-blue-100 p-2 rounded-full">
              <h2>{num}</h2>
            </div>
            <p className="max-w-75 text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="sm:hidden grid grid-cols-1 p-4 gap-6 w-full">
        {[
          {
            num: "10K+",
            desc: "Professionals trained for exceptional career success",
          },
          {
            num: "200+",
            desc: "Sessions delivered with unmatched learning excellence",
          },
          {
            num: "5K+",
            desc: "Active learners engaged in dynamic courses",
            last: true,
          },
        ].map(({ num, desc, last }) => (
          <div
            key={num}
            className={`flex items-center text-left gap-4 pb-4 ${!last && "border-b-2"}`}
          >
            <div className="flex justify-center items-center text-universal font-semibold min-w-17.5 w-17.5 bg-blue-100 p-2 rounded-full">
              <h2 className="text-base">{num}</h2>
            </div>
            <p className="text-sm text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default record;
