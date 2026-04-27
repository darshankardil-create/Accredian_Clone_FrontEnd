function CategoryPill({ category }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium hover:border-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 dark:hover:border-primary-800 dark:hover:text-primary-400 hover:text-primary-700 transition-all shadow-sm group">
      <span>{category.label}</span>
      <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs font-bold group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 group-hover:text-primary-600 transition-colors">
        {category.count}
      </span>
    </span>
  );
}

export default function CategoriesSection() {
  const CATEGORIES = [
    { label: "Accredian Spotlight", slug: "accredian-spotlight", count: 280 },
    { label: "Data Science", slug: "data-science", count: 279 },
    { label: "Product Management", slug: "product-management", count: 207 },
    { label: "Accredian DS Spotlight", slug: "ds-spotlight", count: 109 },
    {
      label: "Artificial Intelligence",
      slug: "artificial-intelligence",
      count: 98,
    },
    { label: "Non-Programmer", slug: "non-programmer", count: 91 },
    {
      label: "Programmer/Non-Programmer",
      slug: "programmer-non-programmer",
      count: 80,
    },
    {
      label: "Professional Background",
      slug: "professional-background",
      count: 74,
    },
    { label: "Industry", slug: "industry", count: 71 },
    {
      label: "7 to 15 Years Experience",
      slug: "7-to-15-years-experience",
      count: 59,
    },
  ];
  return (
    <section
      id="categories"
      className="py-16 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find specialized content tailored to your career path and interests.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <CategoryPill key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
