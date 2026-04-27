import Image from "next/image";

const Accredianedge = () => {
  return (
    <div id="accredianEdge" className="mt-12 px-4 md:px-8 xl:px-12">
      <div className="text-center pb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          The <span className="text-universal">Accredian Edge</span>
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mt-3">
          Key Aspects of{" "}
          <span className="text-universal">Our Strategic Training</span>
        </p>
      </div>
      <div className="hidden sm:flex justify-center mb-8">
        <div className="w-full h-auto rounded-lg">
          <Image
            src={"/img/accredian-edge-usp-v3.svg"}
            alt="Accredian Edge"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Accredianedge;
