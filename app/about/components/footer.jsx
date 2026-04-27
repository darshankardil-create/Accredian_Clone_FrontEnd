"use client";
import { useState } from "react";
import Image from "next/image";
import LeadForm from "./../../components/landingpage/LeadForm";

const BG = "#1D1D1D";

// ── Social Icons ─────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: "1.7rem", height: "1.7rem", fill: "white" }}
  >
    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: "1.7rem", height: "1.7rem", fill: "white" }}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);
const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: "1.7rem", height: "1.7rem", fill: "white" }}
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: "1.7rem", height: "1.7rem", fill: "white" }}
  >
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: "1.7rem", height: "1.7rem", fill: "white" }}
  >
    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline", marginRight: 4 }}
    aria-hidden="true"
  >
    <path d="M14 6h8" />
    <path d="m18 2 4 4-4 4" />
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
);

// ── Programs data ─────────────────────────────────────────────────────────────
const programCategories = [
  {
    name: "senior management",
    phone: "+91 7678385465",
    programs: [
      {
        title: "IIM Ranchi - Senior Management Program",
        href: "https://accredian.com/programs/iim-ranchi-senior-management-program",
      },
      {
        title: "IIM Amritsar - Senior Management Program",
        href: "https://accredian.com/programs/iima-senior-management-program",
      },
      {
        title:
          "XLRI - Executive Development Program in Global Senior Management",
        href: "https://accredian.com/programs/executive-development-program-in-global-senior-management",
      },
      {
        title: "IIM Tiruchirappalli - Accelerated Senior Management Programme",
        href: "https://accredian.com/programs/accelerated-senior-management-program",
      },
      {
        title: "IIM Visakhapatnam - Global Senior Leadership Program",
        href: "https://accredian.com/programs/global-senior-leadership-program",
      },
      {
        title: "IIM Visakhapatnam - Senior Management Program",
        href: "https://accredian.com/programs/senior-management-program",
      },
    ],
  },
  {
    name: "CXO Leadership",
    phone: "+91 9810184424",
    programs: [
      {
        title:
          "XLRI - Executive Development Programme for Emerging Chief Technology Officers (The CTO Programme)",
        href: "https://accredian.com/programs/executive-development-programme-for-emerging-chief-technology-officers-the-cto-programme",
      },
      {
        title:
          "IIM Lucknow - Chief Digital & AI Officer Programme (The CDAIO Program)",
        href: "https://accredian.com/programs/iiml-chief-digital-ai-officer-programme-the-cdaio-program",
      },
      {
        title: "IIM Visakhapatnam - Chief Human Resource Officer Programme",
        href: "https://accredian.com/programs/chief-human-resource-officer-programme",
      },
      {
        title:
          "IIM Tiruchirappalli - Chief Technology Officer Programme (The CTO Program)",
        href: "https://accredian.com/programs/iim-trichy-chief-technology-officer-programme",
      },
      {
        title:
          "IIM Visakhapatnam - Chief Executive Officer Program (The CEO Program)",
        href: "https://accredian.com/programs/chief-executive-officer-program",
      },
      {
        title:
          "IIM Visakhapatnam - PG Certificate Program in Chief Digital & AI Officer (The CDAIO Program)",
        href: "https://accredian.com/programs/pg-certificate-program-in-chief-digital-and-ai-officer-program",
      },
      {
        title:
          "IIM Visakhapatnam - Chief Technology Officer Programme (The CTO Program)",
        href: "https://accredian.com/programs/chief-technology-officer-programme",
      },
      {
        title: "IIM Visakhapatnam - Chief Financial Officer Programme",
        href: "https://accredian.com/programs/chief-financial-officer-programme",
      },
    ],
  },
  {
    name: "design thinking",
    phone: "+91 9818329799",
    programs: [
      {
        title:
          "IIT Hyderabad - Executive Program in Design Thinking & Innovation for Strategic Leadership",
        href: "https://accredian.com/programs/iith-executive-program-in-design-thinking-and-innovation-for-strategic-leadership",
      },
    ],
  },
  {
    name: "project management",
    phone: "+91 9818329799",
    programs: [
      {
        title:
          "IIT Hyderabad - Professional Certificate Program in Strategic Project Management",
        href: "https://accredian.com/programs/iith-professional-certificate-program-in-strategic-project-management",
      },
      {
        title:
          "IIM Lucknow - Executive Program in Strategic Project Management & Leadership",
        href: "https://accredian.com/programs/iiml-executive-program-in-strategic-project-management-leadership",
      },
      {
        title:
          "IIM Visakhapatnam - Post Graduate Certificate in Strategic Project Management & Leadership",
        href: "https://accredian.com/programs/pg-certificate-in-strategic-project-management-and-leadership",
      },
    ],
  },
  {
    name: "artificial intelligence",
    phone: "+91 9211285411",
    programs: [
      {
        title:
          "SP Jain School of Global Management - Executive Program in Generative AI & Agentic AI for Leaders",
        href: "https://accredian.com/programs/executive-program-in-generative-ai-for-leaders",
      },
      {
        title:
          "SP Jain School of Global Management - Professional Certificate in Generative AI for Business Transformation",
        href: "https://accredian.com/programs/professional-certificate-in-applied-generative-ai",
      },
      {
        title:
          "IIM Visakhapatnam - Executive Program in Generative AI for Business Leaders",
        href: "https://accredian.com/programs/executive-program-in-generative-ai-for-business-leaders",
      },
      {
        title: "IIM Visakhapatnam - Executive Program in Leadership with AI",
        href: "https://accredian.com/programs/iimv-executive-program-in-leadership-with-ai",
      },
      {
        title:
          "E&ICT Academy IIT Kanpur - Advanced Certificate Program in AI for Leaders",
        href: "https://accredian.com/programs/advanced-certificate-program-in-ai-for-leaders",
      },
      {
        title:
          "E&ICT Academy IIT Kanpur - Professional Certificate Program in Leadership with AI",
        href: "https://accredian.com/programs/professional-certificate-program-in-leadership-with-ai",
      },
    ],
  },
  {
    name: "human resource",
    phone: "+91 8851827093",
    programs: [
      {
        title: "IIM Visakhapatnam - Chief Human Resource Officer Programme",
        href: "https://accredian.com/programs/chief-human-resource-officer-programme",
      },
      {
        title:
          "SP Jain School of Global Management - Executive Program in Strategic HR Leadership",
        href: "https://accredian.com/programs/executive-program-in-strategic-hr-leadership",
      },
      {
        title:
          "XLRI - Executive Development Program in Strategic HR Leadership",
        href: "https://accredian.com/programs/executive-development-program-strategic-hr-leadership",
      },
      {
        title:
          "XLRI - Executive Development Programme in Digital HR Leadership and People Analytics",
        href: "https://accredian.com/programs/executive-development-program-in-digital-hr-leadership-and-people-analytics",
      },
    ],
  },
  {
    name: "PG Diploma",
    phone: "+91 9818329799",
    programs: [
      {
        title:
          "IIM Visakhapatnam - Post Graduate Diploma in Management for Working Executives (PGDMEx)",
        href: "https://accredian.com/programs/post-graduate-diploma-in-management-for-working-executives",
      },
    ],
  },
  {
    name: "strategy & leadership",
    phone: "+91 8882597163",
    programs: [
      {
        title:
          "IIM Visakhapatnam - Executive Program in Strategy, Leadership and Innovation in AI Era",
        href: "https://accredian.com/programs/executive-program-in-strategy-leadership-and-innovation-in-ai-era",
      },
      {
        title: "XLRI - Executive Development Program in Strategy & Leadership",
        href: "https://accredian.com/programs/executive-program-in-strategy-leadership",
      },
    ],
  },
  {
    name: "general management",
    phone: "+91 9810184424",
    programs: [
      {
        title: "IIM Lucknow - Executive General Management Program",
        href: "https://accredian.com/programs/executive-general-management-program",
      },
      {
        title: "XLRI - Executive Development Program in General Management",
        href: "https://accredian.com/programs/executive-program-in-general-management",
      },
    ],
  },
  {
    name: "business management",
    phone: "+91 9810184424",
    programs: [
      {
        title: "IIM Visakhapatnam - Executive Program in Business Management",
        href: "https://accredian.com/programs/executive-program-in-business-management",
      },
    ],
  },
  {
    name: "finance",
    phone: "+91 9289224842",
    programs: [
      {
        title: "IIM Visakhapatnam - Chief Financial Officer Programme",
        href: "https://accredian.com/programs/chief-financial-officer-programme",
      },
      {
        title:
          "IIM Visakhapatnam - PG Certificate Program in Investment Banking & Capital Markets",
        href: "https://accredian.com/programs/pg-certificate-program-in-investment-banking",
      },
      {
        title:
          "IIM Visakhapatnam - Post Graduate Certificate in FinTech, Blockchain & Risk Management",
        href: "https://accredian.com/programs/fintech-blockchain-program",
      },
    ],
  },
];

// Desktop groups: rows of up to 3 columns
const desktopRows = [
  programCategories.slice(0, 3),
  programCategories.slice(3, 6),
  programCategories.slice(6, 9),
  programCategories.slice(9, 11),
];

// ── Mobile Accordion ──────────────────────────────────────────────────────────
function MobileAccordion({ category }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: BG, borderRadius: 4 }}>
      <button
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "12px 16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>
          <p
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textTransform: "capitalize",
              margin: 0,
            }}
          >
            {category.name}
          </p>
          <p style={{ color: "#d1d5db", fontSize: 12, marginTop: 2 }}>
            ( <PhoneIcon />
            {category.phone} )
          </p>
        </span>
        <svg
          viewBox="0 0 24 24"
          style={{
            width: 20,
            height: 20,
            fill: "white",
            marginTop: 4,
            flexShrink: 0,
          }}
        >
          <path
            d={open ? "M19 13H5v-2h14z" : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}
          />
        </svg>
      </button>
      {open && (
        <div style={{ padding: "0 16px 16px" }}>
          {category.programs.map((prog, i) => (
            <a
              key={i}
              href={prog.href}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.8)",
                fontSize: 13,
                textDecoration: "none",
                marginBottom: 6,
                lineHeight: 1.4,
              }}
            >
              {prog.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
export default function AccredianFooter() {
  const [openform, setopenform] = useState();

  return (
    <footer
      style={{
        backgroundColor: BG,
        color: "#fff",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* TOP: Logo+Socials | CTA */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingTop: 32,
            marginBottom: 32,
            gap: 16,
          }}
        >
          {/* Logo + Socials */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp"
              alt="Accredian logo"
              width={144} // 9rem ≈ 144px
              height={40} // adjust based on actual aspect ratio
              className="h-auto w-auto"
            />
            <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
              {[
                {
                  href: "https://facebook.com/accredianlearn",
                  label: "Facebook",
                  Icon: FacebookIcon,
                },
                {
                  href: "https://www.linkedin.com/company/accredianedu/",
                  label: "LinkedIn",
                  Icon: LinkedInIcon,
                },
                {
                  href: "https://twitter.com/accredianedu",
                  label: "Twitter",
                  Icon: TwitterIcon,
                },
                {
                  href: "https://www.instagram.com/accredian_edu",
                  label: "Instagram",
                  Icon: InstagramIcon,
                },
                {
                  href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
                  label: "YouTube",
                  Icon: YouTubeIcon,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={label}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <button
              style={{
                backgroundColor: "#1A73E8",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "6px 8px",
                width: 250,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                marginBottom: 6,
                textTransform: "none",
              }}
              onClick={() => {
                setopenform(true);
              }}
            >
              Schedule 1-on-1 Call Now
            </button>
            <span style={{ color: "#fff", fontSize: 12 }}>
              Speak with our Learning Advisor
            </span>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: 0 }} />

        {/* MAIN LINKS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 32,
            padding: "32px 0",
          }}
        >
          {/* Accredian */}
          <div
            style={{ display: "flex", flexDirection: "column", minWidth: 140 }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: 20,
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Accredian
            </p>
            {[
              { label: "About", href: "https://accredian.com/About" },
              { label: "Career", href: "https://accredian.com/Career" },
              { label: "Contact Us", href: "https://accredian.com/contact-us" },
              { label: "Blog", href: "https://blog.accredian.com/" },
              {
                label: "Why Accredian",
                href: "https://accredian.com/whyaccredian",
              },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Blog" ? "_blank" : undefined}
                rel={label === "Blog" ? "noreferrer" : undefined}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Support */}
          <div
            style={{ display: "flex", flexDirection: "column", minWidth: 200 }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: 20,
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Support
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  {
                    label: "Admission Policy",
                    href: "https://accredian.com/policies/accredian-policy",
                  },
                  {
                    label: "Referral Policy",
                    href: "https://accredian.com/terms/referral",
                  },
                  {
                    label: "Refund Policy",
                    href: "https://accredian.com/terms/refund",
                  },
                  {
                    label: "Privacy Policy",
                    href: "https://accredian.com/terms/privacy",
                  },
                  {
                    label: "Cookie Policy",
                    href: "https://accredian.com/terms/cookie-policy",
                  },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  {
                    label: "Cancellation Policy",
                    href: "https://accredian.com/terms/cancellation",
                  },
                  {
                    label: "Terms Of Service",
                    href: "https://accredian.com/terms",
                  },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      marginTop: 10,
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Address */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 200,
              maxWidth: 280,
            }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: 20,
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Address
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: 14,
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: 0 }} />

        {/* PROGRAMS */}
        <div style={{ padding: "24px 0" }}>
          <p style={{ color: "#fff", fontSize: 20, marginBottom: 16 }}>
            Programs
          </p>

          {/* Mobile: accordions */}
          <div
            className="md:hidden"
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {programCategories.map((cat, i) => (
              <MobileAccordion key={i} category={cat} />
            ))}
          </div>

          {/* Desktop: 3-col grid with dividers between row groups */}
          <div className="hidden md:block">
            {desktopRows.map((row, ri) => (
              <div key={ri}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0 40px",
                  }}
                >
                  {row.map((cat, ci) => (
                    <div key={ci} style={{ marginTop: 16 }}>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: 14,
                          fontWeight: 500,
                          textTransform: "capitalize",
                          marginBottom: 4,
                        }}
                      >
                        {cat.name}
                      </p>
                      <div
                        style={{
                          color: "#d1d5db",
                          fontSize: 12,
                          marginBottom: 12,
                        }}
                      >
                        ( <PhoneIcon />
                        {cat.phone} )
                      </div>
                      {cat.programs.map((prog, pi) => (
                        <a
                          key={pi}
                          href={prog.href}
                          style={{
                            display: "block",
                            color: "#9ca3af",
                            fontSize: 12,
                            textDecoration: "none",
                            lineHeight: 1.4,
                            marginBottom: 8,
                          }}
                        >
                          {prog.title}
                        </a>
                      ))}
                    </div>
                  ))}
                  {/* Pad incomplete rows */}
                  {row.length < 3 &&
                    Array.from({ length: 3 - row.length }).map((_, pi) => (
                      <div key={`pad-${pi}`} />
                    ))}
                </div>
                {ri < desktopRows.length - 1 && (
                  <hr style={{ borderColor: "#ffffff", marginTop: 24 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16, marginBottom: 16 }} />
        <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: 0 }} />

        {/* COPYRIGHT */}
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            paddingTop: 40,
            paddingBottom: 40,
            fontSize: 14,
            margin: 0,
          }}
        >
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
      {openform && <LeadForm setoff={setopenform} />}
    </footer>
  );
}
