import React from "react";
import toast from "react-hot-toast"

// ── Mobile accordion item ──────────────────────────────────────────────────
export default function MobileAccordion({ label, links }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="13"
          width="13"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>
      {open && (
        <div className="pl-3 pb-2">
          {links.map(({ label: lbl, href }) => (
            <a
              onClick={(e) => {
                e.preventDefault();
                toast.success(
                  "There are only 3 main pages as mentioned in the assignment: Landing Page, About Page and Blog Page Other links are dummy.",
                );
                setOpen((o) => !o);
              }}
              key={lbl}
              href={href}
              className="block py-2 text-sm text-gray-600 hover:text-[#1a73e8]"
            >
              {lbl}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
