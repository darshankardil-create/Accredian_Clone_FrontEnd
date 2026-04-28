"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronDown, AlertTriangle } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";

const DOMAINS = [
  "Banking & Finance",
  "Healthcare",
  "Information Technology",
  "Manufacturing",
  "Retail",
  "Education",
  "Other",
];

const DELIVERY_MODES = ["Online", "Offline", "Hybrid"];

const IMAGE_URL =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp";

const initialForm = {
  name: "",
  emailid: "",
  phoneno: "",
  companyname: "",
  domain: "",
  numberofcan: "",
  mode: "",
  location: "",
};

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.emailid.trim()) errors.emailid = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailid))
    errors.emailid = "Enter a valid emailid";
  if (!form.phoneno.trim()) errors.phoneno = "Contact number is required";
  else if (!/^\d{10}$/.test(form.phoneno))
    errors.phoneno = "Enter a valid 10-digit number";
  if (!form.companyname.trim()) errors.companyname = "Company name is required";
  if (!form.domain) errors.domain = "Course domain is required";
  if (!form.numberofcan.toString().trim())
    errors.numberofcan = "Number of numberofcan are required";
  if (!form.mode) errors.mode = "Mode of delivery is required";
  if (!form.location.trim()) errors.location = "Location is required";
  return errors;
};

function ErrorMsg({ message }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
      <AlertTriangle size={12} />
      {message}
    </p>
  );
}

export default function EnquireNowModal({ setoff }) {
  async function senddata(data, emailid = null) {
    try {
      setloading(true);
      const res = await axios.post(
        `https://accredian-clone-backend.onrender.com/senddata/${emailid}`,
        data,
      );
      toast.success(res.data.message);
      setemailornot(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  }

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setloading] = useState(false);
  const [optionalemailid, setoptionalemailid] = useState("");
  const [emailornot, setemailornot] = useState(false);
  const [sendemail, setsendemail] = useState(false);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    // Clear individual error on change if field becomes valid
    if (errors[e.target.name]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: newErrors[e.target.name] || "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setemailornot(true);
    }
  };

  const inputClass = (field) =>
    `w-full border-b outline-none py-2 text-sm placeholder-gray-400 transition bg-transparent ${
      errors[field]
        ? "border-red-500 focus:border-red-500 text-gray-700"
        : "border-gray-300 focus:border-blue-500 text-gray-700"
    }`;

  const selectWrapClass = (field) =>
    `relative border-b transition ${
      errors[field]
        ? "border-red-500"
        : "border-gray-300 focus-within:border-blue-500"
    }`;

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center  bg-black/40 backdrop-blur-sm p-4"
      }
    >
      {loading && (
        <div className="absolute z-11 cursor-not-allowed  w-full h-screen"></div>
      )}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md lg:max-w-3xl flex flex-col lg:flex-row overflow-hidden max-h-[95vh]">
        {/* Left — Image (lg only) */}
        <div className="hidden lg:block lg:w-[45%] shrink-0 relative">
          <Image
            src={IMAGE_URL}
            alt="Business professionals"
            fill
            className="object-cover"
            sizes="45vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/10 pointer-events-none" />
        </div>

        {/* Right — Form */}
        <div className="flex flex-col w-full lg:w-[55%] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 sticky top-0 bg-white z-10 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">
              Enquire Now
            </h2>
            <button
              onClick={() => setoff(false)}
              className="text-gray-400 hover:text-gray-600 transition"
              aria-label="Close"
            >
              <X size={22} />
            </button>
          </div>
          {/* Success State */}
          {submitted ? (
            <>
              <div className={`h-120 w-full ${emailornot ? "" : "hidden"}`}>
                <div className="font-black w-full text-center bg-amber-100">
                  This information will be stored in a MongoDB database.
                  Optionally, a structured enquiry email containing all form
                  details can be sent to the address provided below. While this
                  demonstration allows for a flexible recipient, the email
                  address will be hardcoded in the production environment.
                </div>

                <div className="flex flex-col  items-center gap-3 mt-16 ">
                  <input
                    onChange={(e) => {
                      setoptionalemailid(e.target.value);
                    }}
                    className="placeholder:text-[10px] placeholder:font-black placeholder:text-gray-500 sm:placeholder:text-[12px] lg:placeholder:text-[14px] border w-[90%] h-10 "
                    placeholder="Provide email id to send structured enquiry email"
                  />

                  <Button
                    sx={{
                      width: "80%",
                      background:
                        loading && sendemail ? "rgb(186,194,194)" : "",
                    }}
                    variant="contained"
                    onClick={() => {
                      if (!optionalemailid.trim()) {
                        toast.error("Email is required!");
                        return;
                      } else if (
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(optionalemailid)
                      ) {
                        toast.error(
                          "Email id is not valid please enter valid email id!",
                        );
                        return;
                      }

                      setsendemail(true);
                      senddata(form, optionalemailid);
                    }}
                  >
                    {loading && sendemail
                      ? "Loading..."
                      : "Store data in db and send email"}
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      width: "80%",
                      background:
                        loading && !sendemail ? "rgb(186,194,194)" : "",
                    }}
                    onClick={() => {
                      senddata(form);
                    }}
                  >
                    {loading && !sendemail
                      ? "Loading..."
                      : "Store data in db only"}
                  </Button>
                </div>
              </div>

              <div
                className={`flex flex-col items-center justify-center flex-1 px-6 py-12 text-center gap-3 ${emailornot ? "hidden" : ""}`}
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Thank you!
                </h3>
                <p className="text-sm text-gray-500">
                  {sendemail
                    ? `Your data has been saved in database, and an email has been sent to ${optionalemailid}. Please check it out.`
                    : "Your data has been saved in database"}
                </p>
                <button
                  onClick={() => setoff(false)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-md transition"
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            /* Form Fields */
            <div className="px-6 pb-6 pt-4 space-y-3">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={form?.name || ""}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className={inputClass("name")}
                />
                <ErrorMsg message={errors.name} />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="emailid"
                  value={form?.emailid || ""}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className={inputClass("emailid")}
                />
                <ErrorMsg message={errors.emailid} />
              </div>

              {/* Phone */}
              <div>
                <div
                  className={`flex items-center gap-2 border-b transition ${
                    errors.phoneno
                      ? "border-red-500"
                      : "border-gray-300 focus-within:border-blue-500"
                  }`}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 py-2 text-sm text-gray-700 shrink-0"
                  >
                    <span className="text-base">🇮🇳</span>
                    <ChevronDown size={14} className="text-gray-500" />
                    <span className="ml-1">+91</span>
                  </button>
                  <input
                    type="tel"
                    name="phoneno"
                    value={form?.phoneno || ""}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    maxLength={10}
                    className="flex-1 outline-none py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                  />
                </div>
                <ErrorMsg message={errors.phoneno} />
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  name="companyname"
                  value={form?.companyname || ""}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className={inputClass("companyname")}
                />
                <ErrorMsg message={errors.companyname} />
              </div>

              {/* Domain */}
              <div>
                <div className={selectWrapClass("domain")}>
                  <select
                    name="domain"
                    value={form?.domain || ""}
                    onChange={handleChange}
                    className={`w-full appearance-none outline-none py-2 text-sm bg-transparent pr-6 ${
                      form.domain ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    <option value="" disabled>
                      Select Domain
                    </option>
                    {DOMAINS.map((d) => (
                      <option key={d} value={d} className="text-gray-700">
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
                <ErrorMsg message={errors.domain} />
              </div>

              {/* No. of Candidates */}
              <div>
                <input
                  type="number"
                  min={0}
                  name="numberofcan"
                  value={form?.numberofcan || ""}
                  onChange={handleChange}
                  placeholder="Enter No. of candidates"
                  className={inputClass("numberofcan")}
                />
                <ErrorMsg message={errors.numberofcan} />
              </div>

              {/* Mode of Delivery */}
              <div>
                <div className={selectWrapClass("mode")}>
                  <select
                    name="mode"
                    value={form?.mode || ""}
                    onChange={handleChange}
                    className={`w-full appearance-none outline-none py-2 text-sm bg-transparent pr-6 ${
                      form.mode ? "text-gray-700" : "text-gray-400"
                    }`}
                  >
                    <option value="" disabled>
                      Select Mode of Delivery *
                    </option>
                    {DELIVERY_MODES.map((m) => (
                      <option key={m} value={m} className="text-gray-700">
                        {m}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
                <ErrorMsg message={errors.mode} />
              </div>

              {/* Location */}
              <div>
                <input
                  type="text"
                  name="location"
                  value={form?.location || ""}
                  onChange={handleChange}
                  placeholder="Eg: Gurgoan, Delhi, India"
                  className={inputClass("location")}
                />
                <ErrorMsg message={errors.location} />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className={`w-full  text-white font-medium py-3 rounded-md mt-2 transition text-sm tracking-wide ${loading ? "bg-gray-400 text-bold " : "bg-blue-600 text-bold  hover:bg-blue-700 active:bg-blue-800"}`}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
