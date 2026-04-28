"use client";
import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import NavDropdown from "./NavDropdown";
import MobileAccordion from "./MobileAccordion";
import Link from "next/link";

const Navbar = ({ BASE }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [coursesOpen, setCoursesOpen] = React.useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = React.useState(false);
  const [isdark, setisdark] = React.useState(false);

  React.useEffect(() => {
    function a() {
      setisdark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    a();
  }, []);

  const LOGO = `${BASE}/other/logo.webp`;

  const COUNSELOR_IMG = `${BASE}/vision/customer-care-indian-hero-section-image-removebg-preview.webp`;

  const navCategories = [
    "PG Diploma",
    "CXO Leadership",
    "Design Thinking",
    "Management",
    "Strategy & Leadership",
    "Analytics & Data Science",
  ];

  const RESOURCES_LINKS = [
    { label: "Blog", href: "" },
    { label: "Success Stories", href: "" },
  ];

  const ABOUT_LINKS = [
    { label: "Career", href: "" },
    { label: "Why Accredian", href: "" },
    { label: "Vision & Mission", href: "" },
    { label: "Contact Us", href: "" },
  ];

  const MORE_LINKS = [
    { label: "Become a Trainer", href: "https://accredian.com/Career/mentor" },
    { label: "Refer & Earn", href: "https://accredian.com/referandearn" },
  ];

  return (
    <nav
      className={
        "w-full bg-white fixed  z-20 top-14.25  md:top-15.25 shadow-sm"
      }
    >
      <div className="flex justify-between items-end py-3 px-4 xl:px-12 max-w-screen-2xl mx-auto h-27">
        <div className="flex gap-3 top-2.5 absolute  border w-70 left-1/2 translate-x-[-50%] justify-center h-10 items-center  ">
          <span
            className={`absolute bottom-7 text-blue-600   font-bold ${isdark ? "bg-[#1c2228f1]" : "bg-white"}`}
          >
            My work
          </span>
          <Link className="hover:text-blue-500 " href="blog">
            Blog page
          </Link>
          <Link className="hover:text-blue-500" href="about">
            About page
          </Link>
          <Link className="hover:text-blue-500" href="/">
            Main page
          </Link>
        </div>

        {/* Logo */}
        <a href={""}>
          <Image
            src={LOGO}
            alt="Accredian logo"
            width={125}
            height={40}
            className="h-auto w-auto"
          />
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-6">
          {/* Courses mega-dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-md text-white font-medium text-base"
              style={{ backgroundColor: "#1a73e8" }}
            >
              Courses
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
              >
                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
              </svg>
            </button>
            {coursesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-md w-64 py-2 z-50 ">
                {navCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-blue-50 border-b text-gray-700"
                  >
                    <span className="text-sm capitalize">{cat}</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                ))}
                {/* Counselor mini-panel */}
                <div className="flex mt-2 mx-2 mb-1 rounded-xl overflow-hidden shadow bg-blue-50">
                  <div className="flex flex-col justify-center gap-1 p-3 flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                      <span className="text-xs text-gray-600 font-medium">
                        Need Help?
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      Get Course Advice
                    </p>
                    <button className="mt-1 bg-[#1a73e8] text-white text-xs font-medium px-3 py-1 rounded-full w-fit">
                      Talk to Expert
                    </button>
                  </div>
                  <Image
                    src={COUNSELOR_IMG}
                    alt="Expert counselor"
                    width={64}
                    height={80}
                    className="w-16 object-cover object-top"
                  />
                </div>
              </div>
            )}
          </div>

          <a
            onClick={(e) => {
              e.preventDefault();
              toast.success(
                "There are only 3 main pages as mentioned in the assignment: Landing Page, About Page and Blog Page Other links are dummy.",
              );
            }}
            className=" cursor-pointer text-sm font-medium text-gray-700 hover:text-[#1a73e8]"
          >
            For Business
          </a>

          <NavDropdown label="Resources" links={RESOURCES_LINKS} />
          <NavDropdown label="About Us" links={ABOUT_LINKS} />
          <NavDropdown label="More" links={MORE_LINKS} />

          <button
            className="px-4 py-2 rounded-md text-white font-medium text-sm"
            style={{ backgroundColor: "#1a73e8" }}
          >
            Login
          </button>
        </div>

        {/* ── Mobile: courses button + hamburger ── */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="flex items-center gap-1 text-white font-medium px-3 py-1 rounded-sm text-sm"
            style={{ backgroundColor: "#1a73e8" }}
            onClick={() => {
              setMobileCoursesOpen((o) => !o);
              setMenuOpen(false);
            }}
          >
            Courses
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className={`transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : "-rotate-90"}`}
              height="1em"
              width="1em"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
            </svg>
          </button>
          <button
            onClick={() => {
              setMenuOpen((o) => !o);
              setMobileCoursesOpen(false);
            }}
          >
            {menuOpen ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                className="text-neutral-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                className="text-neutral-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Courses panel */}
      {mobileCoursesOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-3">
          {navCategories.map((cat, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2.5 border-b border-gray-100 text-gray-700 cursor-pointer hover:text-[#1a73e8]"
            >
              <span className="text-sm capitalize">{cat}</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Mobile full menu */}

      <div
        className={`md:hidden bg-white border-t border-gray-100 px-4 shadow-lg  ${menuOpen ? "h-145 pb-6 " : "h-0 "} duration-1000 overflow-hidden`}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            toast.success(
              "There are only 3 main pages as mentioned in the assignment: Landing Page, About Page and Blog Page Other links are dummy.",
            );
          }}
          target="_blank"
          rel="noreferrer"
          className="block cursor-pointer py-3 border-b border-gray-100 text-sm font-medium text-gray-700 hover:text-[#1a73e8]"
        >
          For Business
        </a>
        <MobileAccordion label="Resources" links={RESOURCES_LINKS} />
        <MobileAccordion label="About Us" links={ABOUT_LINKS} />
        <MobileAccordion label="More" links={MORE_LINKS} />
        <button
          className={`mt-4 w-[70%]  px-4 py-2 rounded-md text-white font-medium text-sm ${menuOpen ? "absolute bottom-10 left-1/2 translate-x-[-50%]" : ""}`}
          style={{ backgroundColor: "#1a73e8" }}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
