import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const scrollToEvent = useCallback(() => {
    document
      .getElementById("event")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="heroMobile">
      {/* ✅ Background Layers */}
      <div className="heroLayer heroSpotlight" />

      {/* ✅ Layout Wrapper */}
      <div className="heroWrap">
        {/* ✅ TOP: College Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heroHeaderCard"
        >
          {/* ✅ Add your header content here */}
        </motion.div>

        {/* ✅ CENTER: Main Logo */}
        <div className="heroCenterArea">
          <motion.img
            src="/logo1.png"
            alt="ASTRANOVA 26"
            className="heroMainLogo"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ✅ BOTTOM */}
        <div className="heroBottomArea">
          <div className="heroTexts">
            <h2 className="heroDept">
              Department of Computer Science and Engineering
            </h2>

            <h4 className="heroTag">INNOVATE • COMPETE • ELEVATE</h4>
          </div>

          {/* ✅ REGISTER BUTTON */}
          <motion.button
            onClick={scrollToEvent}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="heroRegisterBtn"
          >
            REGISTER NOW
          </motion.button>

          {/* ✅ ICONS BELOW REGISTER */}
          <div className="heroIconsOnly">
            {/* ✅ Instagram Link */}
            <motion.a
              href="https://www.instagram.com/astranova26_.cse?utm_source=qr&igsh=dXoybXRwa3M3Nmw5" // ✅ UPDATE YOUR INSTAGRAM LINK HERE
              target="_blank"
              rel="noreferrer"
              className="iconNeonBtn instaIcon"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </motion.a>

            {/* ✅ Map Link */}
            <motion.a
              href="https://maps.app.goo.gl/iSWguafnxnFqyt3RA" // ✅ UPDATE YOUR MAP LINK HERE
              target="_blank"
              rel="noreferrer"
              className="iconNeonBtn mapIcon"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Location"
            >
              <FaMapMarkerAlt />
            </motion.a>
          </div>

          {/* ✅ Bottom Divider */}
          <div className="heroBottomDivider" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
