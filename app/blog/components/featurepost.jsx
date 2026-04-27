import Image from "next/image";

const FEATURED_POST = {
  slug: "product-thinking-vs-project-thinking-why-the-difference-matters-for-modern-teams",
  title:
    "Product Thinking vs. Project Thinking: Why the Difference Matters for Modern Teams",
  category: { label: "Product Management", slug: "product-management" },
  author: "Author",
  date: "Jun 18, 2025",
  image:
    "https://api-blog.accredian.com/wp-content/uploads/2025/06/Product-vs-Project.png",
};

function FeaturedBadge() {
  return (
    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
      Featured
    </span>
  );
}

function AuthorAvatarLarge({ initial }) {
  return (
    <div className="w-10 h-10 rounded-full  bg-linear-to-br from-primary-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
      {initial}
    </div>
  );
}

export default function FeaturedPost() {
  const post = FEATURED_POST;
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Featured Insight
        </h2>
      </div>

      <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 flex flex-col md:flex-row min-h-100">
        {/* Image */}
        <div className="absolute inset-0 z-0 md:w-1/2">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-80 md:opacity-100 transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0  bg-linear-to-t from-gray-900 via-gray-900/80 md:bg-linear-to-r md:from-transparent md:via-gray-900/50 md:to-gray-900 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end md:justify-center p-8 md:p-12 md:w-1/2 md:ml-auto md:bg-gray-900/90 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <FeaturedBadge />
            <span className="text-xs font-medium text-gray-300 hover:text-white transition-colors">
              {post.category.label}
            </span>
          </div>

          <span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 line-clamp-3 leading-tight group-hover:text-primary-400 transition-colors">
              {post.title}
            </h2>
          </span>

          <div className="text-gray-300 mb-8 line-clamp-3 md:line-clamp-4 text-sm md:text-base leading-relaxed hidden md:block" />

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AuthorAvatarLarge initial="A" />
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>
            <span className="hidden md:flex items-center gap-2 text-primary-400 hover:text-white font-medium text-sm transition-colors">
              Read Article →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
