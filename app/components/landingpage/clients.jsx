import Image from "next/image";

const Clients = () => {
  const CLIENTS = [
    {
      src: "/img/rel.png",
      alt: "Reliance",
      cls: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
    },
    {
      src: "/img/hcl.png",
      alt: "HCL",
      cls: "w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40",
    },
    {
      src: "/img/ibm.png",
      alt: "IBM",
      cls: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
    },
    {
      src: "/img/crif.png",
      alt: "CRIF",
      cls: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
    },
    {
      src: "/img/adp.svg",
      alt: "ADP",
      cls: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24",
    },
    {
      src: "/img/bayer.svg",
      alt: "Bayer",
      cls: "w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24",
    },
  ];

  return (
    <div>
      <div id="clients" className="mt-8 sm:mt-28 xl:px-12 px-4 text-center">
        <div className="text-center mx-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Our Proven <span className="text-universal">Partnerships</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-3">
            Successful Collaborations With the{" "}
            <span className="text-universal">Industry`s Best</span>
          </p>
        </div>
        <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 xl:gap-12 mt-6">
          {CLIENTS.map(({ src, alt, cls }) => (
            <li key={alt} className="flex justify-center items-center sm:p-4">
              <Image
                src={src}
                alt={alt}
                width={96}
                height={96}
                className={`object-contain ${cls} transition-transform duration-200 hover:scale-110`}
              />
            </li>
          ))}
        </ul>
        <div className="sm:hidden overflow-hidden relative w-full mt-4">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...CLIENTS, ...CLIENTS].map(({ src, alt }, i) => (
              <div
                key={i}
                className="inline-flex justify-center items-center px-8"
              >
                <div className="object-contain">
                  <Image src={src} alt={alt} width={56} height={56} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
