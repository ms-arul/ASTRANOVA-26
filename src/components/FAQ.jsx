import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Can I participate in multiple events?",
    a: "No. Each participant/team can participate in only one event at a time.",
  },
  {
    q: "Is this event open to students from other colleges?",
    a: "Yes. Students from all colleges are welcome to participate in Astranova 26.",
  },
  {
    q: "Will certificates be provided?",
    a: "Yes. Participation and winner certificates will be provided for all registered events.",
  },
  {
    q: "Do I need to bring my own laptop?",
    a: "For technical events, participants are advised to bring their own laptops fully charged.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [shineIndex, setShineIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));

    setShineIndex(index);
    setTimeout(() => setShineIndex(-1), 900);
  };

  return (
    <section
      id="faq"
      className="relative w-full min-h-screen overflow-hidden bg-transparent"
    >
      <div className="relative z-10 py-24 px-4 sm:px-6">
        {/* ✅ TITLE */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-semibold sm:font-bold
              tracking-[0.22em] uppercase
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
              bg-clip-text text-transparent
            "
          >
            FAQ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="
              mt-4 text-white/65
              max-w-2xl mx-auto
              text-sm sm:text-base
              leading-relaxed
              font-normal
            "
          >
            Everything you need to know about Astranova 26. If you still have
            questions, feel free to reach out to the coordinators.
          </motion.p>

          <div className="mt-6 mx-auto h-[3px] w-44 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-90" />
        </div>

        {/* ✅ FAQ LIST */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl space-y-5"
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const shineNow = shineIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemAnim}
                layout
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/15
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_0_30px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:border-white/25
                "
              >
                {/* ✅ CLICK REFLECTION SWEEP */}
                <AnimatePresence>
                  {shineNow && (
                    <motion.div
                      initial={{ x: "-140%", opacity: 0 }}
                      animate={{ x: "140%", opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.85, ease: "easeInOut" }}
                      className="
                        pointer-events-none absolute top-0 left-0 h-full w-1/2
                        bg-gradient-to-r from-transparent via-white/20 to-transparent
                        skew-x-12
                      "
                    />
                  )}
                </AnimatePresence>

                {/* ✅ subtle glass highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/10 to-transparent" />

                {/* ✅ HEADER */}
                <motion.button
                  layout
                  whileTap={{ scale: 0.985 }}
                  onClick={() => toggleFAQ(index)}
                  className="
                    relative z-10 w-full text-left
                    flex items-center justify-between gap-4
                    px-6 py-5
                    text-white
                    focus:outline-none
                  "
                >
                  {/* ✅ LEFT SIDE */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* ✅ Neon dot */}
                    <motion.span
                      layout
                      animate={{ scale: isOpen ? 1.2 : 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className="
                        mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full
                        bg-cyan-400
                        shadow-[0_0_18px_rgba(34,211,238,0.85)]
                      "
                    />

                    {/* ✅ text block */}
                    <div className="min-w-0">
                      <p
                        className="
                          text-[15px] sm:text-[16px]
                          font-medium
                          tracking-wide
                          text-white/90
                          leading-snug
                          break-words
                        "
                      >
                        {item.q}
                      </p>

                      <p className="mt-1 text-xs sm:text-sm text-white/40 tracking-wide">
                        Tap to {isOpen ? "close" : "open"}
                      </p>
                    </div>
                  </div>

                  {/* ✅ ICON (fixed & always centered ✅) */}
                  <motion.span
                    layout
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.05 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                    }}
                    className="
                      shrink-0 grid place-items-center
                      h-10 w-10
                      rounded-full
                      border border-white/15
                      bg-white/5
                      text-cyan-300
                      transition duration-300
                      group-hover:border-cyan-400/40
                      group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                    "
                  >
                    <span className="text-[22px] leading-none font-semibold select-none">
                      +
                    </span>
                  </motion.span>
                </motion.button>

                {/* ✅ ANSWER */}
                <AnimatePresence initial={false} mode="wait">
                  {isOpen && (
                    <motion.div
                      key="content"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 px-6 pb-5"
                    >
                      <div className="h-px w-full bg-white/10 mb-4" />

                      <motion.p
                        layout
                        initial={{ y: 6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 6, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="
                          text-white/70
                          text-[14px] sm:text-[15.5px]
                          leading-[1.75]
                          font-normal
                          tracking-[0.01em]
                        "
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ✅ Bottom glow when open */}
                <motion.div
                  layout
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    pointer-events-none absolute inset-x-0 bottom-0 h-14
                    bg-gradient-to-t from-cyan-400/10 via-purple-500/5 to-transparent
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
