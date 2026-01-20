import { motion } from "framer-motion";
import {
  RiUserAddLine,
  RiMicLine,
  RiRocketLine,
  RiTrophyLine,
} from "react-icons/ri";

export default function Timeline() {
  const steps = [
    {
      title: "Registration",
      subtitle: "Participant onboarding & check-in",
      Icon: RiUserAddLine,
      glow: "from-cyan-300 via-blue-400 to-purple-500",
      iconColor: "text-cyan-300",
    },
    {
      title: "Inauguration",
      subtitle: "Opening ceremony & keynote",
      Icon: RiMicLine,
      glow: "from-pink-400 via-purple-500 to-indigo-500",
      iconColor: "text-pink-300",
    },
    {
      title: "Technical & Non-Technical Events",
      subtitle: "Competitions, challenges & fun",
      Icon: RiRocketLine,
      glow: "from-emerald-300 via-cyan-400 to-blue-500",
      iconColor: "text-emerald-300",
    },
    {
      title: "Valediction",
      subtitle: "Winners, certificates & closing",
      Icon: RiTrophyLine,
      glow: "from-yellow-300 via-orange-400 to-pink-500",
      iconColor: "text-yellow-300",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-28 px-4 sm:px-6">
        {/* DATE BADGE */}
        <div className="flex justify-center mb-6">
          <span
            className="
              px-6 py-2 rounded-full
              bg-cyan-400/10
              border border-cyan-400/30
              text-cyan-300
              text-sm font-semibold tracking-[0.25em]
              uppercase
            "
          >
            February 12, 2026
          </span>
        </div>

        {/* ================= TITLE (GRADIENT + MOTION COLOR) ================= */}
        <div className="relative flex justify-center mb-20">
          {/* Glow Blob behind title */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              absolute -top-10
              w-[380px] sm:w-[520px] h-[120px]
              rounded-full blur-3xl
              bg-gradient-to-r from-cyan-500/35 via-purple-500/35 to-pink-500/35
            "
          />

          {/* Animated Gradient Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              relative
              text-center
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold
              tracking-[0.12em]
              uppercase
              drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
            "
          >
            <motion.span
              animate={{
                filter: [
                  "hue-rotate(0deg)",
                  "hue-rotate(120deg)",
                  "hue-rotate(240deg)",
                  "hue-rotate(360deg)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                inline-block
                bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400
                text-transparent bg-clip-text
              "
            >
              Event Timeline
            </motion.span>
          </motion.h2>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:block max-w-6xl mx-auto relative">
          {/* ANIMATED HORIZONTAL LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            className="
              absolute top-1/2 left-0 right-0
              h-px
              bg-gradient-to-r
              from-transparent via-cyan-400/40 to-transparent
            "
          />

          <div className="flex justify-between items-center gap-16">
            {steps.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="md:hidden max-w-md mx-auto relative">
          {/* ANIMATED VERTICAL LINE */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            className="
              absolute left-4 top-0 bottom-0
              w-px
              bg-gradient-to-b
              from-transparent via-cyan-400/40 to-transparent
            "
          />

          <div className="flex flex-col gap-16 pl-10">
            {steps.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} vertical />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */
function TimelineItem({ step, index, vertical = false }) {
  const Icon = step.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`relative flex flex-col ${
        vertical ? "items-start text-left" : "items-center text-center"
      }`}
    >
      {/* STEP NUMBER */}
      <span
        className="
          absolute -top-8
          text-[10px]
          font-semibold tracking-[0.35em]
          uppercase
          text-cyan-300/70
        "
      >
        Step {index + 1}
      </span>

      {/* DOT */}
      <div
        className="
          w-4 h-4
          rounded-full
          bg-cyan-400
          shadow-[0_0_0_8px_rgba(34,211,238,0.18)]
        "
      />

      {/* CARD */}
      <div
        className="
          mt-7
          px-7 py-6
          rounded-2xl
          bg-black/45
          backdrop-blur-xl
          border border-white/15
          shadow-[0_20px_50px_rgba(0,0,0,0.65)]
          max-w-[250px]
          group
          transition-all duration-300
          hover:-translate-y-1 hover:border-cyan-400/30
        "
      >
        {/* ✅ ICON (VISIBLE + GLOW + ANIMATION) */}
        <div className="relative w-fit mx-auto mb-3">
          {/* Glow Aura */}
          <span
            className={`
              absolute -inset-3
              rounded-2xl blur-2xl opacity-70
              bg-gradient-to-r ${step.glow}
              animate-pulse
            `}
          />

          {/* Icon Box */}
          <div
            className="
              relative
              w-16 h-16
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-110
              group-hover:rotate-[2deg]
            "
          >
            <Icon
              className={`
                text-3xl ${step.iconColor}
                drop-shadow-[0_0_18px_rgba(34,211,238,0.7)]
                transition-all duration-300
                group-hover:scale-110
              `}
            />
          </div>
        </div>

        {/* TEXT */}
        <p
          className="
            text-base sm:text-lg
            font-extrabold
            tracking-[0.08em]
            uppercase
            text-white
          "
        >
          {step.title}
        </p>

        <p
          className="
            mt-2
            text-xs sm:text-sm
            text-gray-300/70
            leading-relaxed
            font-medium
          "
        >
          {step.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
