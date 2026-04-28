import { IconBookOpen } from "./Icon";

function BlobOrb({ className }) {
  return (
    <div
      className={`absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${className}`}
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800">
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-white dark:from-gray-950 to-transparent z-10" />
      <BlobOrb className="top-20 left-10 bg-primary-400 animate-blob" />
      <BlobOrb className="top-20 right-10 bg-indigo-400 animate-blob animation-delay-2000" />
      <BlobOrb className="-bottom-8 left-1/2 bg-pink-400 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm mb-8 border border-primary-200 dark:border-primary-800/50 shadow-sm">
            <IconBookOpen />
            <span>Accredian Education Blog</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            Insights that drive{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r  from-red-500 to-indigo-600">
              innovation
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Expert articles, tutorials, and career advice for all technology
            domains, including Data Science, Product Management, Business
            Analytics, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="px-8 py-3.5 cursor-pointer bg-blue-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center">
              Read Latest Articles
            </span>
            <span className="px-8 py-3.5 cursor-pointer bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm w-full sm:w-auto text-center">
              Explore Topics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
