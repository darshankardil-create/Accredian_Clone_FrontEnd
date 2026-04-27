import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const TESTIMONIALS = [
    {
      logo: "/img/adp.svg",
      alt: "ADP",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "img/bayer.svg",
      alt: "Bayer",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      logo: "/img/rel.png",
      alt: "Reliance",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  // Auto-advance testimonials
  React.useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <div
        id="testimonials"
        className="w-full mt-16 sm:mt-20 flex flex-col items-center"
      >
        <div className="text-center mb-10 mx-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Testimonials from{" "}
            <span className="text-universal">Our Partners</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            What <span className="text-universal">Our Clients</span> Are Saying
          </p>
        </div>
        <div className="w-full px-4">
          <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
            <div
              className="tslide flex"
              style={{
                transform: `translateX(-${activeTestimonial * 100}%)`,
              }}
            >
              {TESTIMONIALS.map(({ logo, alt, text }) => {
                if (logo)
                  return (
                    <div
                      key={alt}
                      className={
                        "min-w-full bg-white p-6 sm:p-10 min-h-55 flex flex-col justify-center"
                      }
                    >
                      <div className="h-14 mb-5 flex items-center">
                        <div
                          className={`h-10 sm:h-14 pb-25 ${logo === "/img/adp.svg" ? "pt-10" : ""}`}
                        >
                          <Image src={logo} alt={alt} width={94} height={30}  />
                        </div>
                      </div>

                      <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                        ``{text}``
                      </p>
                    </div>
                  );
              })}
            </div>
          </div>
          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={() =>
                setActiveTestimonial(
                  (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                )
              }
              className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#1a56db] hover:text-[#1a56db] transition-colors"
            >
              <svg
                viewBox="0 0 512 512"
                className="w-3 h-3"
                fill="currentColor"
              >
                <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L311 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
              </svg>
            </button>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-6 h-3 bg-universal" : "w-3 h-3 bg-gray-300 hover:bg-blue-300"}`}
              />
            ))}
            <button
              onClick={() =>
                setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length)
              }
              className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#1a56db] hover:text-[#1a56db] transition-colors"
            >
              <svg
                viewBox="0 0 512 512"
                className="w-3 h-3"
                fill="currentColor"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
