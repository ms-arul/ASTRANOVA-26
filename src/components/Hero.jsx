import React, { useCallback } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const scrollToEvent = useCallback(() => {
    document
      .getElementById("event")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="heroMobile">
      {/* ✅ Layout (No backgrounds now) */}
      <div className="heroWrap">
        {/* ✅ TOP: College Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heroHeaderCard"
        >
          {/* your header content */}
        </motion.div>

        {/* ✅ CENTER: Logo */}
        <div className="heroCenterArea">
          <motion.img
            src="/logo1.png"
            alt="ASTRANOVA 26"
            className="heroMainLogo"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ✅ BOTTOM (Auto bottom ✅) */}
        <div className="heroBottomArea">
          <div className="heroTexts">
            {/* ✅ Department in ONE LINE */}
            <h2 className="heroDept">
              Department of Computer Science & Engineering
            </h2>

            {/* ✅ Motion Gradient Slogan */}
            <h4 className="heroTag">INNOVATE • COMPETE • ELEVATE</h4>
          </div>

          <motion.button
            onClick={scrollToEvent}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="heroRegisterBtn"
          >
            REGISTER NOW
          </motion.button>

          {/* ✅ Bottom divider */}
          <div className="heroBottomDivider" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
