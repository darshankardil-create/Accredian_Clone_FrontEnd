"use client";
import Fotter from "./components/landingpage/footer";
import Banner from "./components/landingpage/banner";
import Testimonials from "./components/landingpage/testimonial";
import Clients from "./components/landingpage/clients";
import Navbar from "./components/landingpage/navbar";
import Segmentation from "./components/landingpage/segmentation";
import Whomejoin from "./components/landingpage/whomejoin";
import Catframework from "./components/landingpage/catframework";
import Domainexpert from "./components/landingpage/domainexpert";
import Workingofit from "./components/landingpage/workingofit";
import Hero from "./components/landingpage/hero";
import Record from "./components/landingpage/record";
import Accredianedge from "./components/landingpage/Accredianedge";
import Faqs from "./components/landingpage/Faqs";
import Style from "./components/landingpage/style";

export default function Accredian() {
  return (
    <div className="w-full overflow-x-hidden">
      <Style />
      {/* ═══ Navbar ══════════════════════════════════════════════════ */}
      <Navbar />
      {/* ═══ PAGE CONTENT ══════════════════════════════════════════════════ */}
      <div className="pt-35">
        <Hero />
        <div className="sm:px-16 px-0 flex justify-center">
          <div className="max-w-340 w-full">
            <Record />
            <Clients />
            <Accredianedge />
            <Domainexpert />
            <Segmentation />
            <Whomejoin />
            <Catframework />
            <Workingofit />
            <Faqs /> {/* Frequently Asked Questions  */}
            <Testimonials />
            <Banner />
            <Fotter />
          </div>
        </div>
      </div>
    </div>
  );
}
