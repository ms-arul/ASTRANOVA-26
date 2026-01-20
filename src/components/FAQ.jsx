import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Can I participate in multiple events?",
    a: "Yes. Participants are allowed to register for and participate in multiple events, provided there are no schedule conflicts.",
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
    transition: { staggerChildren: 0.12 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
            transition={{ duration: 0.7 }}
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-extrabold tracking-widest
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
              bg-clip-text text-transparent
            "
          >
            FAQ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Everything you need to know about Astranova 26. If you still have
            questions, feel free to reach out to the coordinators.
          </motion.p>

          {/* ✅ Divider */}
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

            return (
              <motion.div
                key={index}
                variants={itemAnim}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/15
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_0_30px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
                "
              >
                {/* ✅ subtle top highlight (glass shine) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/10 to-transparent" />

                {/* ✅ Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="
                    relative z-10 w-full text-left
                    flex items-center justify-between gap-4
                    px-6 py-5
                    text-white
                  "
                >
                  <div className="flex items-center gap-3">
                    {/* ✅ Neon dot */}
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
                    <span className="font-semibold tracking-wide text-sm sm:text-base">
                      {item.q}
                    </span>
                  </div>

                  {/* ✅ Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full border border-white/15
                      bg-white/5
                      text-cyan-300
                      transition duration-300
                      group-hover:border-cyan-400/40
                      group-hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]
                    "
                  >
                    +
                  </motion.span>
                </button>

                {/* ✅ Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="relative z-10 px-6 pb-5"
                    >
                      <div className="h-px w-full bg-white/10 mb-4" />

                      <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
