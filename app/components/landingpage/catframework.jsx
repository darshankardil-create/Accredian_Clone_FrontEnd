import Image from "next/image";

const catframework = () => {
  return (
    <section
      id="cat"
      className="w-full mt-12 sm:mt-24 py-8 flex flex-col items-center second-bg-grad"
    >
      <div className="text-center mx-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          The <span className="text-universal">CAT Framework</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Our Proven Approach to{" "}
          <span className="text-universal">Learning Excellence</span>
        </p>
      </div>
      <div className="w-full flex justify-center mt-12">
        <div className="w-[90%] sm:w-[70%] h-auto rounded-lg">
          <Image
            src={"img/catV2.svg"}
            alt="CAT Framework"
            width={900}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default catframework;
