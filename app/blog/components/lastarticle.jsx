import { IconArrowRight } from "./Icon";
import Image from "next/image";

function ArticleCardAvatar() {
  return (
    <div className="w-8 h-8 rounded-full  bg-linear-to-tr from-primary-500 to-blue-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
      A
    </div>
  );
}

function ArticleCategoryBadge({ category }) {
  return (
    <span className="text-xs font-semibold text-primary-700 bg-primary-50 dark:bg-primary-900/30 dark:text-primary-400 px-3 py-1 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
      {category.label}
    </span>
  );
}

function ArticleCardMeta({ author, date }) {
  return (
    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <ArticleCardAvatar />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
          {author}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-md">
        {date}
      </span>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-900/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <span className="block relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={article.image}
        />
      </span>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <ArticleCategoryBadge category={article.category} />
        </div>

        <span className="block group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
            {article.title}
          </h2>
        </span>

        <div className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed" />

        <ArticleCardMeta author={article.author} date={article.date} />
      </div>
    </div>
  );
}

export default function LatestArticles() {
  const LATEST_ARTICLES = [
    {
      slug: "the-new-product-manager-skill-stack-for-2025-ai-prompting-data-storytelling-strategic-thinking",
      title:
        "The New Product Manager Skill Stack for 2025: AI Prompting, Data Storytelling & Strategic Thinking",
      category: { label: "Product Management", slug: "product-management" },
      author: "Author",
      date: "Jun 12, 2025",
      image:
        "https://api-blog.accredian.com/wp-content/uploads/2025/06/New-Blog-Images.jpg",
    },
    {
      slug: "you-dont-need-to-be-a-prompt-engineer-just-think-like-one",
      title: "You Don't Need to Be a Prompt Engineer — Just Think Like One",
      category: {
        label: "Artificial Intelligence",
        slug: "artificial-intelligence",
      },
      author: "Author",
      date: "May 26, 2025",
      image:
        "https://api-blog.accredian.com/wp-content/uploads/2025/05/New-Blog-Images-1.png",
    },
    {
      slug: "stop-treating-genai-like-a-toy-start-treating-it-like-a-team-member",
      title:
        "Stop Treating GenAI Like a Toy — Start Treating It Like a Team Member",
      category: {
        label: "Artificial Intelligence",
        slug: "artificial-intelligence",
      },
      author: "Author",
      date: "May 22, 2025",
      image:
        "https://api-blog.accredian.com/wp-content/uploads/2025/05/New-Blog-Images.png",
    },
    {
      slug: "10-game-changing-benefits-of-genai-you-cant-afford-to-ignore-in-2025",
      title:
        "10 Game-Changing Benefits of GenAI You Can't Afford to Ignore in 2025",
      category: {
        label: "Artificial Intelligence",
        slug: "artificial-intelligence",
      },
      author: "Author",
      date: "Apr 30, 2025",
      image:
        "https://api-blog.accredian.com/wp-content/uploads/2025/04/441.png",
    },
    {
      slug: "top-10-genai-tools-dominating-2025",
      title: "Top 10 GenAI Tools Dominating 2025",
      category: {
        label: "Artificial Intelligence",
        slug: "artificial-intelligence",
      },
      author: "Author",
      date: "Apr 28, 2025",
      image:
        "https://api-blog.accredian.com/wp-content/uploads/2025/04/430.png",
    },
    {
      slug: "genai-v-s-traditional-ai-a-clear-comparison",
      title: "GenAI v/s Traditional AI: A Clear Comparison",
      category: {
        label: "Artificial Intelligence",
        slug: "artificial-intelligence",
      },
      author: "Author",
      date: "Apr 25, 2025",
      image:
        "https://api-blog.accredian.com/wp-content/uploads/2025/04/429.png",
    },
  ];
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            Latest Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Fresh perspectives from our industry experts.
          </p>
        </div>
        <span className="hidden md:flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
          View all <IconArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LATEST_ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <span className="inline-flex items-center gap-2 text-primary-600 font-semibold">
          View all articles <IconArrowRight />
        </span>
      </div>
    </section>
  );
}
