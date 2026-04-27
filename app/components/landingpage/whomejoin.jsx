import Image from "next/image";

const whomejoin = () => {
  const WHO_JOIN = [
    {
      label: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 sm:w-14 sm:h-14 mb-2 shrink-0"
        >
          <path d="m9 10 2 2 4-4" />
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      ),
    },
    {
      label: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 sm:w-14 sm:h-14 mb-2 shrink-0"
        >
          <path d="m14.5 12.5-5-5" />
          <path d="m9.5 12.5 5-5" />
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      ),
    },
    {
      label: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 sm:w-14 sm:h-14 mb-2 shrink-0"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      ),
    },
    {
      label: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 sm:w-14 sm:h-14 mb-2 shrink-0"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-12 sm:mt-28 xl:px-6 px-4 lg:mx-10 bg-universal sm:rounded-2xl flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/2 pt-12 md:pl-8 text-white flex flex-col justify-between">
        <div>
          <h4 className="text-lg sm:text-xl font-medium opacity-90">
            Who Should Join?
          </h4>
          <h1 className="text-2xl md:text-[40px] leading-tight capitalize mt-2 font-semibold">
            Strategic Skill Enhancement
          </h1>
        </div>
        <div className="w-75 hidden md:block mt-4">
          <Image
            src={"/img/imagehuman.png"}
            alt="Professional"
            width={300}
            height={350}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-12 text-white gap-8 md:pl-8">
        {WHO_JOIN.map(({ label, desc, icon }) => (
          <div
            key={label}
            className="who-item flex gap-4 sm:gap-2 flex-row sm:flex-col cursor-default"
          >
            {icon}
            <div>
              <h2 className="text-[16px] sm:text-[22px] font-semibold">
                {label}
              </h2>
              <p className="text-sm text-blue-100 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default whomejoin;
