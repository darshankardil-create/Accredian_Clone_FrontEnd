"use client";

import Header from "./components/header";
import HeroSection from "./components/herosection";
import Footer from "./components/footer";
import LatestArticles from "./components/lastarticle";
import FeaturedPost from "./components/featurepost";
import CategoriesSection from "./components/CategoriesSection";

const LOGO_URL =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp";

export default function AccredianBlogPage() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <div className="flex flex-col min-h-screen">
          <HeroSection />
          <FeaturedPost />
          <CategoriesSection />
          <LatestArticles />
        </div>
      </main>
      <Footer LOGO_URL={LOGO_URL} />
    </div>
  );
}
