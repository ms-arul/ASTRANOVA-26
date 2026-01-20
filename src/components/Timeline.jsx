import React, { useRef } from "react";

export default function Footer() {
  const linkRef = useRef(null);

  // 🎯 Magnetic hover (desktop only, smooth & subtle)
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const el = linkRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    el.style.transform = `translate(${dx * 0.07}px, ${dy * 0.07}px)`;
  };

  const resetPosition = () => {
    const el = linkRef.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  return (
    <footer className="relative py-10 sm:py-12 text-center">
      {/* ✅ THICK divider */}
      <div className="mx-auto mb-6 h-[2px] sm:h-[3px] w-[72%] max-w-3xl rounded-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <p className="text-[15px] sm:text-base tracking-wide text-gray-300 font-medium">
        © <span className="text-white font-bold">2026</span>{" "}
        <span className="font-extrabold text-[16px] sm:text-[18px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          ASTRANOVA
        </span>
        <span className="mx-3 text-gray-500">|</span>
        <span className="text-gray-400 font-semibold">Department of CSE</span>
      </p>

      <p className="mt-3 text-[12px] sm:text-[13px] tracking-[0.22em] text-gray-400 uppercase leading-relaxed font-semibold">
        Designed & Developed by{" "}
        <a
          ref={linkRef}
          href="http://ms-arul-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetPosition}
          className="
            relative inline-block font-extrabold text-cyan-300
            transition-transform duration-300 ease-out
            hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text
            focus:outline-none

            /* ✅ THICK underline */
            after:absolute after:left-1/2 after:-translate-x-1/2
            after:-bottom-[8px]
            after:h-[3px]
            after:w-full
            after:origin-center after:scale-x-0
            after:rounded-full
            after:bg-gradient-to-r after:from-cyan-400 after:via-purple-500 after:to-pink-500
            after:transition-transform after:duration-300
            hover:after:scale-x-100
            focus:after:scale-x-100

            /* ✅ STRONG glow */
            hover:drop-shadow-[0_0_18px_rgba(0,255,255,0.45)]
          "
        >
          Arulprakash S
        </a>{" "}
        <span className="text-gray-500 font-semibold">(3rd Year B.E – CSE)</span>
      </p>

      {/* ✅ THICK bottom caption */}
      <p className="mt-5 text-[11px] sm:text-[12px] tracking-[0.2em] text-gray-500 uppercase font-semibold">
        Crafted with Passion ✦ ASTRANOVA’26
      </p>
    </footer>
  );
}
