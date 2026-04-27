import Image from "next/image";
import LeadForm from "./LeadForm"
import {useState} from "react"

//top 3 tics
function CheckIcon() {
  return (
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
      className="w-6 h-6 text-green-600 shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const Hero = () => {


const[formopen,setformopen]=useState(false)



  return (
    <div className="flex justify-center ">
     
      <div className="max-w-340 w-full bg-[#EFF6FF] shadow-lg shadow-gray-400 rounded-3xl  ">
        <div
          id="home"
          className="flex justify-center items-center my-4 mt-8 xl:px-12 sm:px-4 mb-10 md:mb-0"
        >
          <div className="rounded-lg md:rounded-3xl bg-blue-50 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 md:gap-8 shadow-card overflow-visible w-full">
            <div className="sm:w-1/2 w-full sm:ml-7 flex flex-col gap-4 md:gap-8 lg:gap-10 md:ps-2 lg:ps-8">
              <h1 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-6xl font-bold max-w-full sm:max-w-87.5 lg:max-w-175 pt-2 capitalize px-8 sm:px-0 leading-tight">
                Next-Gen <span className="text-universal">Expertise</span> for
                Your <span className="text-universal">Enterprise</span>
              </h1>
              <p className="font-medium md:font-normal text-sm sm:text-lg lg:text-2xl text-gray-600 max-w-full p-2 sm:p-0 sm:max-w-87.5 text-center sm:text-start">
                Cultivate high-performance teams through expert learning.
              </p>
              <ul className="grid grid-cols-2 mx-auto sm:flex sm:mx-0 sm:flex-wrap gap-4">
                {[
                  "Tailored Solutions",
                  "Industry Insights",
                  "Expert Guidance",
                  "Measurable Impact",
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 mb-2 ${i === 3 ? "sm:hidden" : ""}`}
                  >
                    <CheckIcon />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex mb-6 sm:mb-0 justify-center sm:justify-start">
                <button className="btn-primary w-[80%] sm:w-42.5 px-4 py-3 text-white bg-universal rounded-lg shadow-md font-medium text-sm md:text-base"
                onClick={() => setformopen(true)}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="flex w-full sm:w-1/2 sm:justify-end sm:items-end justify-center">
              <div className="sm:w-full sm:h-full h-[80%] w-[80%]">
                <Image
                  src={"/img/corporate-big-hero-v4.webp"}
                  alt="Two people"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {formopen &&  <LeadForm setoff={setformopen} />}
    </div>
  );
};

export default Hero;
