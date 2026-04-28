import React from "react";

const style = () => {
  return (
    <style>{`
        .text-universal  { color: #1a56db; }
        .bg-universal    { background-color: #1a56db; }
        .border-universal{ border-color: #1a56db; }

        /* Nav underline slide */
        .nav-lnk { position:relative; transition:color .2s; padding-bottom:4px; }
        .nav-lnk::after { content:''; position:absolute; bottom:0; left:0; width:0; height:3px; background:#1a56db; border-radius:2px; transition:width .25s ease; }
        .nav-lnk:hover::after, .nav-lnk.active::after { width:100%; }
        .nav-lnk.active  { color:#1a56db; font-weight:600; }
        .nav-lnk:hover   { color:#1a56db; }

        /* Primary button */
        .btn-primary { transition: transform .15s, box-shadow .15s, background-color .15s; }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(26,86,219,.35); background-color:#1648c0; }
        .btn-primary:active { transform:translateY(0); }

        /* Card hovers */
        .domain-card { transition:transform .2s, box-shadow .2s; }
        .domain-card:hover { transform:translateY(-4px); box-shadow:0 10px 24px rgba(26,86,219,.15); }
        .cat-card { transition:transform .25s, box-shadow .25s; }
        .cat-card:hover { transform:translateY(-6px); box-shadow:0 14px 30px rgba(0,0,0,.12); }
        .step-card { transition:transform .25s, box-shadow .25s; }
        .step-card:hover { transform:translateY(-4px); box-shadow:0 12px 28px rgba(26,86,219,.18); }

        /* Marquee */
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .animate-marquee { animation: marquee 22s linear infinite; }
        .animate-marquee:hover { animation-play-state:paused; }

        /* Testimonial slide */
        .tslide { transition: transform .5s cubic-bezier(.4,0,.2,1); }

        /* Mobile menu */
        @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        .mobile-menu { animation: slideDown .2s ease forwards; }

        .cta-grad { background: linear-gradient(135deg,#1a56db 55%,#1e40af 100%); }
        .second-bg-grad { background: linear-gradient(180deg,#eff6ff 0%,#fff 100%); }
        .shadow-card { box-shadow: 0 4px 24px rgba(0,0,0,.08); }

        .no-scrollbar::-webkit-scrollbar { display:none; }
        .no-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }

        .who-item { transition: transform .2s; }
        .who-item:hover { transform: translateX(4px); }
      `}</style>
  );
};

export default style;
