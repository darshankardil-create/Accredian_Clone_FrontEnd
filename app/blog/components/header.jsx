import Image from "next/image";
import { DesktopNavItem, MobileNavItem } from "./ResponsiveNavItem";
import { IconSearch } from "./Icon";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const LOGOURL =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp";

  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "Home", href: "/", type: "link" },
    { label: "Explore", type: "dropdown" },
    { label: "Success Stories", type: "dropdown" },
    { label: "Student Testimonial", href: "/testimonials", type: "link" },
    { label: "ACCREDIAN Spotlight", type: "dropdown" },
  ];

  return (
    <header className="sticky top-0 z-50  border-b border-gray-100 bg-white/80  backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800 ">
      <div className="flex gap-3 top-2.5 relative mx-auto border sm:w-[90%] max-[639px]:w-[90%] lg:w-80 md:w-70  justify-center h-10 items-center  ">
        <span className="absolute bottom-7 bg-white font-bold">My work</span>
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

      <div className=" flex h-16  justify-center pr-3 items-center  w-full relative">
        <div className=" flex items-center   w-full relative  ">
          <div className="h-10">
            <Image
              alt="Accredian Logo"
              width={160}
              height={40}
              className="object-contain relative left-5 top-2 "
              src={LOGOURL}
              priority
            />
          </div>

          <nav className="   gap-6 w-[51%] max-[1189px]:w-180  absolute right-0 max-[895px]:hidden flex ">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}

            {/* <div className="relative bottom-2">
              <span className="text-gray-500 pt-2 mt-2 bg-white h-10 w-10 rounded-full flex justify-center mx-auto ">
                <IconSearch />
              </span>
            </div> */}
          </nav>

          <div className="flex items-center gap-10 w-full">
            <div className="hidden max-[895px]:block w-full ">
              <div className="flex justify-end  gap-6 ">
                <span className="z-50">
                  <label className="btn btn-circle swap swap-rotate bg-white border-none">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        if (e.target.checked) {
                          setMobileOpen(true);
                        } else {
                          setMobileOpen(false);
                        }
                      }}
                    />

                    <svg
                      className="swap-off fill-current "
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    {/* close icon */}
                    <svg
                      className="swap-on fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                  </label>
                </span>

                <span className="text-gray-500 pt-2.5 bg-white h-10 w-10 rounded-full flex justify-center max-[895px]:absolute max-[895px]:right-15">
                  <IconSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white dark:bg-gray-950 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{ top: 64, height: "calc(100vh - 64px)" }}
      >
        <div className="flex flex-col h-full overflow-y-auto p-4">
          <div className="space-y-2 pb-8">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
