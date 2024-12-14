import React from "react";
import "../assets/styles/FifthBonde.css";
import { FaLeaf, FaSearch, FaPhone } from "react-icons/fa";

function FifthBonde() {
  return (
    <div className="fifth-bonde">
      <div className="fifth-bonde-header">
        <h1>We’re Yadra</h1>
        <p>We’re a review platform that’s open to everyone</p>
      </div>
      <div className="fifth-bonde-content">
        <div className="feature">
          <div className="icon-wrapper">
            <FaLeaf className="feature-icon" />
          </div>
          <h3>Honest Feedback</h3>
          <p>
            We empower users to share honest reviews that help Algerian
            businesses grow.
          </p>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <FaSearch className="feature-icon" />
          </div>
          <h3>Building Trust Through Transparency</h3>
          <p>
            Verified reviews and clear metrics build trust between customers and
            companies.
          </p>
        </div>
        <div className="feature">
          <div className="icon-wrapper">
            <FaPhone className="feature-icon" />
          </div>
          <h3>24/7 Support</h3>
          <p>
            Answers to any business-related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FifthBonde;
