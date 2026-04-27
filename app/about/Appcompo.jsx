"use client";

import Footer from "./components/footer";
import Joinus from "./components/joinus";
import Record from "./components/record";
import Team from "./components/team";
import Quote from "./components/quote";
import Vision from "./components/vision";
import Navbar from "./components/navbar";
import Banner from "./components/banner";

const App = () => {
  const BASE =
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images";
  return (
    <div className="w-full font-sans bg-white text-gray-800">
      <Banner />
      <Navbar BASE={BASE} />
      {/* Spacer for fixed nav */}
      <div className="h-30 md:h-31.25" />
      {/* Hero / Vision Section */}
      <Vision BASE={BASE} />
      <Quote />
      {/* Leadership Team */}
      <Team BASE={BASE} />
      <Record />
      <Joinus />
      <Footer />
    </div>
  );
};

export default App;
