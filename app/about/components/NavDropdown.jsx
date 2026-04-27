import React from "react";
import toast from "react-hot-toast";

// ── Reusable hover dropdown for desktop ────────────────────────────────────
export default function NavDropdown({ label, links }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1a73e8] transition-colors py-1"
        onClick={() => {
          setOpen((o) => !o);
        }}
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
        <div className="absolute top-full left-0 bg-white shadow-xl rounded-md border border-gray-100 w-52 py-1 z-50">
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
              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#1a73e8] hover:bg-blue-50 capitalize transition-colors"
            >
              {lbl}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
