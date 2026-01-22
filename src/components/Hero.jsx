import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="heroMobile">
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

        {/* ✅ BOTTOM */}
        <div className="heroBottomArea">
          <div className="heroTexts">
            <h3 className="heroDept">
              Department of Computer Science & Engineering
            </h3>
            <h4 className="heroTag">INNOVATE • COMPETE • ELEVATE</h4>
            
          </div>

          {/* ✅ REGISTER NOW BUTTON WITH LINK */}
          <motion.a
            href="https://your-form-link-here.com"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="heroRegisterBtn"
          >
            REGISTER NOW
          </motion.a>

          {/* ✅ ICONS ONLY (NO OUTER CONTAINER ✅) */}
          <div className="heroIconsOnly">
            {/* ✅ Google Map */}
            <a
              href="https://maps.app.goo.gl/iSWguafnxnFqyt3RA"
              target="_blank"
              rel="noreferrer"
              className="iconNeonBtn"
              title="Location"
            >
              <FaMapMarkerAlt />
            </a>

            {/* ✅ Instagram */}
            <a
              href="https://www.instagram.com/astranova26_.cse?utm_source=qr&igsh=dXoybXRwa3M3Nmw5"
              target="_blank"
              rel="noreferrer"
              className="iconNeonBtn"
              title="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
