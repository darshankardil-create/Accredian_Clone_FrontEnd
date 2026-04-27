import Image from "next/image";

function FooterCategoryList() {
  const FOOTER_CATEGORIES = [
    { label: "Data Science", slug: "data-science" },
    { label: "Product Management", slug: "product-management" },
    { label: "General Management", slug: "general-management" },
    { label: "Business Analytics", slug: "business-analytics" },
    { label: "Digital Transformation", slug: "digital-transformation" },
    {
      label: "Operations-Supply Chain Management",
      slug: "operations-supply-chain-management",
    },
  ];
  return (
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Categories
      </h3>
      <ul className="space-y-3">
        {FOOTER_CATEGORIES.map((cat) => (
          <li key={cat.slug}>
            <span className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {cat.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterCompanyList() {
  const COMPANY_LINKS = [
    { label: "About Us", href: "https://accredian.com/about", internal: false },
    {
      label: "Programs",
      href: "https://accredian.com/programs",
      internal: false,
    },
    {
      label: "Contact Us",
      href: "https://accredian.com/contact-us",
      internal: false,
    },
    { label: "All Articles", href: "/blog", internal: true },
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
        Company
      </h3>
      <ul className="space-y-3">
        {COMPANY_LINKS.map((link) => (
          <li key={link.label}>
            {link.internal ? (
              <span className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {link.label}
              </span>
            ) : (
              <span className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottom() {
  const SOCIAL_LINKS = [
    { label: "Twitter", href: "https://twitter.com/accredianedu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/accredianedu/",
    },
    { label: "Facebook", href: "https://facebook.com/accredianlearn" },
  ];

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 dark:text-gray-500 text-sm">
        © 2026 Accredian. All rights reserved.
      </p>
      <div className="flex gap-6">
        {SOCIAL_LINKS.map((link) => (
          <span
            key={link.label}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {link.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function FooterBrand({ LOGO_URL }) {
  return (
    <div className="md:col-span-2">
      <span className="flex items-center gap-2 mb-4">
        <Image
          alt="Accredian Logo"
          loading="lazy"
          width={160}
          height={40}
          className="h-auto w-auto object-contain"
          src={LOGO_URL}
        />
      </span>
      <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
        Empowering professionals through top-tier education across all major
        technology domains.
      </p>
    </div>
  );
}

export default function Footer({ LOGO_URL }) {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <FooterBrand LOGO_URL={LOGO_URL} />
          <FooterCategoryList />
          <FooterCompanyList />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
