"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const isScrollingRef = React.useRef(false);

  // ── Smooth scroll ──────────────────────────────────────────────────────────────
  function smoothScrollTo(id) {
    console.log(id);
    const el = document.getElementById(id);
    if (!el) return;
    const navH = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: "smooth" });
  }

  const NAV_LINKS = [
    { label: "Home", href: "home" },
    { label: "Stats", href: "stats" },
    { label: "Clients", href: "clients" },
    { label: "Accredian Edge", href: "accredianEdge" },
    { label: "CAT", href: "cat" },
    { label: "How It Works", href: "howItWorks" },
    { label: "FAQs", href: "faqs" },
    { label: "Testimonials", href: "testimonials" },
  ];

  const handleNav = React.useCallback((e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    isScrollingRef.current = true;
    smoothScrollTo(id);
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1100);
  }, []);

  // IntersectionObserver — highlight nav link for visible section
  React.useEffect(() => {
    const obs = [];
    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current)
            setActiveSection(href);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-5 px-6 md:px-14">
        <div className="flex gap-3 bottom-1 relative mx-auto border sm:w-[90%] max-[639px]:w-[90%] lg:w-80 md:w-70  justify-center h-10 items-center  ">
          <span className="absolute bottom-7 bg-white font-bold">My work</span>
          <Link className="hover:text-blue-500 " href="blog">
            Blog page
          </Link>
          <Link className="hover:text-blue-500" href="about">
            About page
          </Link>
          <Link className="hover:text-blue-500" href="blog">
            Main page
          </Link>
        </div>

        <div className="max-w-340 mx-auto flex justify-between items-center">
          <button onClick={(e) => handleNav(e, "home")}>
            <Image
              src={"/img/logo.webp"}
              alt="Accredian"
              width={124}
              height={32}
              className="h-auto w-auto"
            />
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center flex-1 justify-end space-x-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={`#${href}`}
                  onClick={(e) => handleNav(e, href)}
                  className={`nav-lnk text-[15px] cursor-pointer ${activeSection === href ? "active" : "text-gray-800"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-1 rounded hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
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
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            {mobileMenuOpen && (
              <div className="mobile-menu absolute top-12 right-0 bg-white shadow-xl p-6 rounded-xl z-50 w-56">
                <ul className="flex flex-col space-y-3">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={`#${href}`}
                        onClick={(e) => handleNav(e, href)}
                        className={`block text-[15px] py-1 rounded transition-colors ${activeSection === href ? "text-[#1a56db] font-semibold" : "text-gray-700 hover:text-[#1a56db]"}`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
