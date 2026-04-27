import React from "react";
import LeadForm from "./LeadForm";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  const bodyRef = React.useRef(null);
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm mb-3 bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-base sm:text-lg font-semibold pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open
            ? // eslint-disable-next-line
              (bodyRef.current?.scrollHeight ?? 400) + "px"
            : "0px",
        }}
      >
        <div className="px-4 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

const Faqs = () => {
  const [activeFaqTab, setActiveFaqTab] = React.useState("About the Course");
  const [formopen, setformopen] = React.useState(false);

  const ALL_FAQS = {
    "About the Course": [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        q: "What domain specializations are available?",
        a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
      },
      {
        q: "Are programs available for all experience levels?",
        a: "Yes, our programs cater to all levels — from freshers and mid-career professionals to senior leadership and C-suite executives.",
      },
    ],
    "About the Delivery": [
      {
        q: "How are the training sessions delivered?",
        a: "We offer flexible delivery modes including live online sessions, in-person workshops, and hybrid models tailored to your organization's preferences.",
      },
      {
        q: "Can programs be customized for our company's schedule?",
        a: "Absolutely. We work with your HR and L&D teams to design a schedule that minimizes disruption while maximizing learning impact.",
      },
    ],
    Miscellaneous: [
      {
        q: "How do we get started with Accredian Enterprise?",
        a: "Simply click 'Enquire Now' or 'Contact Us' to connect with our enterprise team. We'll schedule a discovery call to understand your needs and propose a solution.",
      },
      {
        q: "Do you provide post-training support?",
        a: "Yes, we provide ongoing support including access to recorded sessions, mentorship, and alumni networks to ensure long-term learning outcomes.",
      },
    ],
  };

  const faqTabs = Object.keys(ALL_FAQS);

  return (
    <div
      id="faqs"
      className="w-full flex justify-center mt-16 md:py-12 xl:px-12 px-4"
    >
      <div className="w-full max-w-340">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Frequently Asked <span className="text-universal">Questions</span>
        </h2>
        <div className="flex gap-6 md:flex-row flex-col">
          {/* Tab sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="no-scrollbar flex flex-row md:flex-col items-center gap-3 overflow-x-auto pb-2 md:pb-0">
              {faqTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFaqTab(tab)}
                  className={`w-full min-w-45 md:min-w-0 rounded-lg px-4 py-4 text-center text-sm sm:text-base font-semibold transition-all duration-200 ${
                    activeFaqTab === tab
                      ? "bg-white shadow-lg border-2 border-universal text-universal scale-[1.02]"
                      : "bg-white border-2 border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* Accordion */}
          <div className="flex-1 min-w-0">
            {ALL_FAQS[activeFaqTab].map((faq) => (
              <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="btn-primary px-8 py-3 bg-universal text-white font-semibold rounded-lg shadow-md"
          onClick={() => setformopen(true)}
          >
            Enquire Now
          </button>
        </div>
      </div>
     {formopen && <LeadForm setoff={setformopen} /> }
    </div>
  );
};

export default Faqs;
