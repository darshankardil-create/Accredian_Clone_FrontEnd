import Image from "next/image";

const segmentation = () => {
  const CAT_CARDS = [
    {
      src: "/img/project-management-v2.webp",
      alt: "Program Specific",
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
    },
    {
      src: "/img/digital-transformation-v2.webp",
      alt: "Industry Specific",
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    },
    {
      src: "/img/data-science-v2.webp",
      alt: "Topic Specific",
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    },
    {
      src: "/img/senior-management-v2.webp",
      alt: "Level Specific",
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    },
  ];

  return (
    <div>
      <section className="mt-12 sm:mt-28 md:mx-16 mb-10 text-center">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Tailored <span className="text-universal">Course Segmentation</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Explore <span className="text-universal">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {CAT_CARDS.map(({ src, alt, title, desc }) => (
            <div
              key={title}
              className="cat-card cursor-pointer bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
            >
              <div className="relative w-full h-40">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
              <div className="p-4 text-left">
                <h4 className="text-xl sm:text-2xl font-semibold text-universal">
                  {title}
                </h4>
                <p className="text-gray-600 hidden sm:block mt-2 text-sm pb-2">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default segmentation;
