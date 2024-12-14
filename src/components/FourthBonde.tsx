import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BusinessComponent.css";

function Fourthbonde() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/create-account-company"); // Navigate to the correct route
  };

  return (
    <div className="business-component">
      <div className="business-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          You have a business?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Join Yadra and inspire customer confidence with real reviews.
        </motion.p>
        <motion.button
          className="get-started-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNavigation}
        >
          <span>Get started</span>
          <FaArrowRight className="arrow-icon" />
        </motion.button>
      </div>
      <div className="business-image">
        <video autoPlay loop muted>
          <source src="./assets/img/business.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Fourthbonde;
