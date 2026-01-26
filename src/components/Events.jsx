// src/pages/Events.jsx ✅ FULL ONE FILE ✅ Mobile Optimized ✅ Forward + Reverse Auto Scroll ✅

import { events } from "../data/events";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

/* ✅ STATIC GRADIENT MAP (Tailwind safe ✅) */
const GRADIENTS = {
  apex: "from-emerald-400 via-cyan-500 to-blue-600",
  quiz: "from-indigo-500 via-purple-600 to-pink-500",
  prompt: "from-teal-400 via-sky-500 to-indigo-600",
  debug: "from-amber-400 via-orange-500 to-red-600",
  uxplore: "from-pink-500 via-rose-500 to-red-600",
  default: "from-cyan-500 via-sky-500 to-blue-600",
};

/* ✅ Default Form Link */
const DEFAULT_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScuR2BqnLjH7kLRGz1cP36EfhaGISXcr6oNseHGFWhhuk4jYQ/viewform";

/* ✅ Default Joining Fee */
const DEFAULT_JOINING_FEE = "₹100";

/* ✅ Typing text */
function TypingTextOnView({ text = "", className = "", start = false, speed }) {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!start) {
      setTyped("");
      return;
    }

    let i = 0;
    setTyped("");

    const timer = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, start, speed]);

  useEffect(() => {
    if (!start) return;
    const cursor = setInterval(() => setShowCursor((p) => !p), 450);
    return () => clearInterval(cursor);
  }, [start]);

  return (
    <p className={className}>
      {typed}
      {typed.length < text.length && (
        <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
      )}
    </p>
  );
}

/* ✅ Event Card */
function EventCard({ e, onOpen, typingSpeed, isMobile }) {
  const accent = GRADIENTS[e.accentKey] || GRADIENTS.default;
  const fee = e.joiningFeePerHead || DEFAULT_JOINING_FEE;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.55 });

  return (
    <motion.div
      ref={ref}
      whileHover={!isMobile ? { scale: 1.04 } : undefined}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      className="snap-center min-w-[88%] sm:min-w-[70%] md:min-w-0 relative rounded-2xl overflow-hidden
                 flex flex-col sm:flex-row border border-white/20
                 shadow-[0_0_35px_rgba(0,255,255,0.12)] min-h-[300px]"
    >
      {/* ✅ GLOW (lighter on mobile for performance) */}
      <motion.div
        animate={{ opacity: [0.18, 0.42, 0.18] }}
        transition={{ repeat: Infinity, duration: isMobile ? 2.8 : 2 }}
        className={`absolute -inset-1 bg-gradient-to-r ${accent} blur-2xl`}
      />

      {/* ✅ Joining Fee Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span
          className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider
                     bg-black/55 border border-white/15 text-white backdrop-blur-md"
        >
          Fee: {fee}/Head
        </span>
      </div>

      {/* LEFT */}
      <div className="relative z-10 p-6 w-full sm:w-[60%] flex flex-col justify-center text-center">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-widest">
          {e.title}
        </h3>

        {/* ✅ BADGE */}
        <span
          className={`mx-auto mt-3 px-4 py-1.5 rounded-full text-xs uppercase font-semibold
                      bg-gradient-to-r ${accent} text-white`}
        >
          {e.category}
        </span>

        {/* ✅ Typing Desc */}
        <TypingTextOnView
          text={e.desc}
          start={inView}
          speed={typingSpeed}
          className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed min-h-[80px]"
        />

        <button
          onClick={() => onOpen(e)}
          className={`mt-6 px-6 py-2.5 rounded-full
                      bg-gradient-to-r ${accent}
                      text-white font-semibold active:scale-95 hover:scale-110 transition`}
        >
          View Details →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full sm:w-[40%] h-[160px] sm:h-auto">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${e.bg})` }}
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>
    </motion.div>
  );
}

/* ✅ Small detail box */
function Detail({ label, value }) {
  return (
    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
      <p className="text-xs uppercase opacity-70">{label}</p>
      <p className="font-bold text-sm mt-1">{value || "TBA"}</p>
    </div>
  );
}

/* ✅ MAIN */
export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const typingSpeed = isMobile ? 10 : 22;

  /* ✅ BODY SCROLL LOCK WHEN MODAL OPEN */
  useEffect(() => {
    if (selectedEvent) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [selectedEvent]);

  /* ✅ ESC KEY CLOSE MODAL */
  useEffect(() => {
    const escClose = (e) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", escClose);
    return () => window.removeEventListener("keydown", escClose);
  }, []);

  // ✅ Get ONE CARD WIDTH correctly (mobile fix)
  const getCardWidth = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return 0;
    const firstCard = container.querySelector("[data-card='event']");
    if (!firstCard) return container.offsetWidth;
    return firstCard.getBoundingClientRect().width + 40; // include gap
  }, []);

  /* ✅ AUTO SCROLL MOBILE ONLY (Forward + Reverse) */
  useEffect(() => {
    if (!carouselRef.current || !isMobile) return;

    const container = carouselRef.current;
    const totalCards = events.length;

    let currentIndex = 0;
    let direction = 1;

    autoScrollRef.current = setInterval(() => {
      if (pausedRef.current) return;
      if (selectedEvent) return;

      currentIndex += direction;

      if (currentIndex >= totalCards - 1) direction = -1;
      if (currentIndex <= 0) direction = 1;

      const cardWidth = getCardWidth();

      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }, 3300);

    return () => clearInterval(autoScrollRef.current);
  }, [selectedEvent, isMobile, getCardWidth]);

  const pauseAutoScroll = () => (pausedRef.current = true);
  const resumeAutoScroll = () => (pausedRef.current = false);

  const handleRegister = useCallback(() => {
    const link = selectedEvent?.formLink || DEFAULT_FORM_LINK;
    window.open(link, "_blank", "noopener,noreferrer");
  }, [selectedEvent]);

  const modalAccent =
    selectedEvent?.accentKey && GRADIENTS[selectedEvent.accentKey]
      ? GRADIENTS[selectedEvent.accentKey]
      : GRADIENTS.default;

  const joiningFee = selectedEvent?.joiningFeePerHead || DEFAULT_JOINING_FEE;

  return (
    <section id="event" className="min-h-screen py-20 sm:py-24 px-3 sm:px-4">
      <h2
        className="text-center mt-6 mb-10 text-4xl sm:text-5xl font-extrabold tracking-widest
             bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
             bg-clip-text text-transparent"
      >
        COMPETITIONS
      </h2>

      {/* ✅ CARDS */}
      <div
        ref={carouselRef}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={resumeAutoScroll}
        className="flex md:grid md:grid-cols-2 gap-10 max-w-6xl mx-auto
                   overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6
                   scroll-smooth scrollbar-none px-2"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollPaddingLeft: "10px",
          scrollPaddingRight: "10px",
        }}
      >
        {events.map((e) => (
          <div key={e.id} data-card="event" className="min-w-[88%] md:min-w-0">
            <EventCard
              e={e}
              onOpen={setSelectedEvent}
              typingSpeed={typingSpeed}
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-end justify-center px-3 pt-12 pb-5"
          >
            <motion.div
              initial={{ y: 40, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black/70 backdrop-blur-xl p-4 sm:p-6 rounded-2xl
                         max-w-[92vw] sm:max-w-2xl w-full
                         border border-white/20 text-white relative
                         max-h-[82vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full
                           bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
              >
                ✕
              </button>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-3">
                {selectedEvent.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs uppercase font-semibold
                              bg-gradient-to-r ${modalAccent} text-white`}
                >
                  {selectedEvent.category}
                </span>

                <span className="px-4 py-1.5 rounded-full text-xs uppercase font-bold bg-white/10 border border-white/10 text-white">
                  Joining Fee: {joiningFee}/Head
                </span>
              </div>

              <p className="text-center text-white/80 mb-6 text-sm sm:text-base">
                {selectedEvent.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
                <Detail label="Date" value={selectedEvent.date} />
                <Detail label="Time" value={selectedEvent.time} />
                <Detail label="Team" value={selectedEvent.teamSize} />
                <Detail label="Prize" value={selectedEvent.prizePool} />
              </div>

              {/* ✅ Venue + Register */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-2">
                <p className="text-center sm:text-left">
                  <span className="text-xs uppercase opacity-70">Venue</span>
                  <br />
                  <span className="font-semibold">{selectedEvent.venue}</span>
                </p>
              </div>

              {/* ✅ Sticky Register Button for Mobile */}
              <div className="sticky bottom-0 left-0 right-0 pt-3 pb-1 bg-black/65 backdrop-blur-xl rounded-xl">
                <button
                  onClick={handleRegister}
                  className={`w-full px-7 py-3 rounded-full bg-gradient-to-r ${modalAccent}
                              text-white font-extrabold tracking-widest
                              active:scale-[0.98] transition whitespace-nowrap`}
                >
                  Register Now →
                </button>

               
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
