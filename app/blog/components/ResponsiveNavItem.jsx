import { IconChevronDown } from "./Icon";

export function DesktopNavItem({ item }) {
  if (item.type === "link") {
    return (
      <div className="text-sm  text-center  font-semibold text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors py-2 px-1  ">
        {item.label}
      </div>
    );
  }
  return (
    <div className="relative inline-block ">
      <button
        type="button"
        className="flex  items-center gap-2 text-sm font-semibold transition-colors py-2 px-1 outline-none text-gray-700 dark:text-gray-300 "
      >
        {item.label}
        <IconChevronDown />
      </button>
    </div>
   
  );
}

export function MobileNavItem({ item }) {
  if (item.type === "link") {
    return (
      <span className="block py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        {item.label}
      </span>
    );
  }
  return (
    <div className="flex flex-col">
      <button className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <span>{item.label}</span>
        <IconChevronDown className="w-5 h-5 opacity-50 transition-transform duration-200" />
      </button>
    </div>
  );
}
