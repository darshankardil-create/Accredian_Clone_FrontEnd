import Image from "next/image";

const Team = ({ BASE }) => {
  const MANAV_IMG = `${BASE}/vision/manav-profile.webp`;
  const NIKHIL_IMG = `${BASE}/vision/nikhil-profile.webp`;
  const SUCHIT_IMG = `${BASE}/vision/suchit-profile.webp`;
  const LINKEDIN_ICON = `${BASE}/vision/linkedin-icon.webp`;

  const leaders = [
    {
      name: "Manvender Singh (Manav)",
      title: "Chief executive officer",
      img: MANAV_IMG,
    },
    {
      name: "Nikhil Bhogaraju",
      title: "Chief operating officer",
      img: NIKHIL_IMG,
    },
    {
      name: "Suchit Majumdar",
      title: "Chief product officer",
      img: SUCHIT_IMG,
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10 text-gray-800">
          Leadership Team
        </h2>

        {/* Desktop grid */}
        <div className=" hidden md:grid grid-cols-3 gap-8 max-[900px]:grid-cols-1    ">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center h-80   bg-[#FFFFFF] shadow-2xl shadow-gray-400"
            >
              <Image
                src={leader.img}
                alt={leader.name}
                width={160}
                height={160}
                className="w-40 h-40 object-cover rounded-full mb-4"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&size=160`;
                }}
              />
              <p className="font-semibold text-gray-800 text-base mb-1">
                {leader.name}
              </p>
              <p className="text-gray-500 text-sm capitalize mb-3">
                {leader.title}
              </p>
              <Image
                src={LINKEDIN_ICON}
                alt="linkedin-icon"
                width={32}
                height={32}
                className="w-8 h-8 object-contain cursor-pointer"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile list */}
        <div className="flex md:hidden flex-col  gap-6 max-[767px]:gap-20">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 px-2  justify-center h-120 bg-[#FFFFFF] shadow-2xl shadow-gray-400"
            >
              <Image
                src={leader.img}
                alt={leader.name}
                width={320}
                height={320}
                className="w-full object-cover max-w-80 width-full rounded-full shirnk-0 "
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&size=80`;
                }}
              />

              <div>
                <p className="font-semibold text-gray-800 ">{leader.name}</p>
                <p className="text-gray-500  capitalize mb-2">{leader.title}</p>
                <Image
                  src={LINKEDIN_ICON}
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain block max-[767px]:mx-auto"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
