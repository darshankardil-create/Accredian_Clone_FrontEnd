import React from "react";

const record = () => {
  const stats = [
    { value: "2018", label: "Year of inception" },
    { value: "5000+", label: "professionals trained" },
    { value: "1.6M", label: "class hours delivered" },
    { value: "30+", label: "batches launched" },
    { value: "3.6 lac", label: "followers & users" },
    { value: "4.5/5", label: "program satisfaction" },
  ];

  return (
    <section className="py-14 px-4" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="max-w-5xl text-center mx-auto">
        <p className="text-blue-600 font-semibold text-lg mb-4 uppercase tracking-wide">
          Our mission & focus
        </p>
        <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          To make world class education accessible &amp;
        </p>
        <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-12">
          enable high impact careers for everyone.
        </p>

        <div className="grid   md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center  grid-cols-2 max-[600px]:grid-cols-1">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex  flex-col items-center max-[600px]:w-full ${i === 0 || i === 5 ? "text-[#C2E76B]" : i === 1 || i === 4 ? "text-[#002E5E]" : i === 2 || i === 3 ? "text-[#00ACD7]" : ""}   ${i === 4 || i === 5 ? "lg:relative left-66 top-6" : ""} w-[178.55px] h-[146.07px]  bg-[#FFFFFF]  pt-5 rounded-md shadow-2xl shadow-gray-400 `}
            >
              <p
                className="text-[42px] font-extrabold"
                // style={{ color: "#1a73e8" }}
              >
                {s.value}
              </p>
              <p className=" text-[#6C757D] text-[17px] mt-1 text-center ">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default record;
