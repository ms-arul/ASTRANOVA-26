import { motion } from "framer-motion";
import { RiWhatsappLine, RiPhoneLine } from "react-icons/ri";

export default function Coordinators() {
  const staffCoordinators = [
    {
      name: "AMSAMANI E",
      role: "Assistant Professor",
      whatsapp: "https://wa.me/919940194947",
      call: "tel:+919940194947",
    },
    {
      name: "PAUL T JABA",
      role: "Assistant Professor",
      whatsapp: "https://wa.me/919498023736",
      call: "tel:+919498023736",
    },
  ];

  const studentCoordinators = [
    {
      name: "J GAVIN JOES",
      year: "3rd Year – B.E (CSE)",
      whatsapp: "https://wa.me/917448423003",
      call: "tel:+917448423003",
    },
    {
      name: "J SOMUSEKHAR",
      year: "3rd Year – B.E (CSE)",
      whatsapp: "https://wa.me/916381268654",
      call: "tel:+916381268654",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-20 sm:py-28 px-3 sm:px-6">
        {/* ✅ TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-5xl font-extrabold tracking-wide"
        >
          <motion.span
            className="
              inline-block
              bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400
              bg-[length:300%_300%]
              bg-clip-text text-transparent
              drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
            "
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Coordinators
          </motion.span>
        </motion.h2>

        {/* ✅ UNDERLINE BAR */}
        <motion.div
          className="
            mx-auto mt-3 h-[3px] sm:h-[4px]
            w-44 sm:w-60
            rounded-full
            bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-400
            bg-[length:300%_300%]
            shadow-[0_0_18px_rgba(217,70,239,0.35)]
            mb-12 sm:mb-16
          "
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ✅ CARDS */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {/* ================= STAFF ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              relative bg-black/40 backdrop-blur-2xl
              border border-white/10 rounded-3xl
              p-5 sm:p-9 text-center
              shadow-[0_25px_60px_rgba(0,0,0,0.65)]
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-full h-[4px] sm:h-[5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400" />

            <h3 className="text-xl sm:text-2xl font-extrabold mb-5 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-sky-300 bg-clip-text text-transparent">
                Staff Coordinators
              </span>
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {staffCoordinators.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    flex items-center justify-between
                    bg-white/5 border border-white/10
                    rounded-2xl px-3 sm:px-5 py-3 sm:py-4
                    backdrop-blur-md
                    transition-all duration-300
                    hover:bg-white/10 hover:scale-[1.02]
                    hover:border-cyan-400/30
                  "
                >
                  {/* ✅ NO ... + NO NEXT LINE */}
                  <div className="text-left flex-1 min-w-0 pr-2 sm:pr-4 overflow-hidden">
                    <p className="text-white font-bold tracking-wide text-base sm:text-lg whitespace-nowrap overflow-hidden">
                      {person.name}
                    </p>
                    <p className="text-[11px] sm:text-xs text-fuchsia-200/70 mt-1 whitespace-nowrap overflow-hidden">
                      {person.role}
                    </p>
                  </div>

                  {/* ✅ ICONS (Mobile small) */}
                  <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                    <a
                      href={person.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        p-2 sm:p-3 rounded-xl
                        bg-green-500/10 border border-green-400/30
                        hover:bg-green-500/20 hover:scale-110
                        transition-all duration-300
                        shadow-[0_0_15px_rgba(34,197,94,0.25)]
                      "
                      title="WhatsApp"
                    >
                      <RiWhatsappLine className="text-lg sm:text-2xl text-green-400" />
                    </a>

                    <a
                      href={person.call}
                      className="
                        p-2 sm:p-3 rounded-xl
                        bg-cyan-500/10 border border-cyan-400/30
                        hover:bg-cyan-500/20 hover:scale-110
                        transition-all duration-300
                        shadow-[0_0_15px_rgba(34,211,238,0.25)]
                      "
                      title="Call"
                    >
                      <RiPhoneLine className="text-lg sm:text-2xl text-cyan-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= STUDENTS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              relative bg-black/40 backdrop-blur-2xl
              border border-white/10 rounded-3xl
              p-5 sm:p-9 text-center
              shadow-[0_25px_60px_rgba(0,0,0,0.65)]
              overflow-hidden
            "
          >
            <div className="absolute top-0 left-0 w-full h-[4px] sm:h-[5px] bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-400" />

            <h3 className="text-xl sm:text-2xl font-extrabold mb-5 sm:mb-6">
              <span className="bg-gradient-to-r from-fuchsia-300 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                Student Coordinators
              </span>
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {studentCoordinators.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="
                    flex items-center justify-between
                    bg-white/5 border border-white/10
                    rounded-2xl px-3 sm:px-5 py-3 sm:py-4
                    backdrop-blur-md
                    transition-all duration-300
                    hover:bg-white/10 hover:scale-[1.02]
                    hover:border-fuchsia-400/30
                  "
                >
                  {/* ✅ NO ... + NO NEXT LINE */}
                  <div className="text-left flex-1 min-w-0 pr-2 sm:pr-4 overflow-hidden">
                    <p className="text-white font-bold tracking-wide text-base sm:text-lg whitespace-nowrap overflow-hidden">
                      {person.name}
                    </p>
                    <p className="text-[11px] sm:text-xs text-fuchsia-200/70 mt-1 whitespace-nowrap overflow-hidden">
                      {person.year}
                    </p>
                  </div>

                  {/* ✅ ICONS (Mobile small) */}
                  <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                    <a
                      href={person.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        p-2 sm:p-3 rounded-xl
                        bg-green-500/10 border border-green-400/30
                        hover:bg-green-500/20 hover:scale-110
                        transition-all duration-300
                        shadow-[0_0_15px_rgba(34,197,94,0.25)]
                      "
                      title="WhatsApp"
                    >
                      <RiWhatsappLine className="text-lg sm:text-2xl text-green-400" />
                    </a>

                    <a
                      href={person.call}
                      className="
                        p-2 sm:p-3 rounded-xl
                        bg-fuchsia-500/10 border border-fuchsia-400/30
                        hover:bg-fuchsia-500/20 hover:scale-110
                        transition-all duration-300
                        shadow-[0_0_16px_rgba(217,70,239,0.25)]
                      "
                      title="Call"
                    >
                      <RiPhoneLine className="text-lg sm:text-2xl text-fuchsia-300" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
