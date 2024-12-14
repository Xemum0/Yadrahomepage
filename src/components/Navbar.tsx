import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css';

// Define the type for the props
interface NavbarProps {
  onLoginClick: () => void;  // Type for the onLoginClick function prop
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [index, setIndex] = useState(0);
  const authenticated = true;

  return (
    <div className="Navbar">
      {/* Logo Section */}
      <div className="LogoDiv">
        <img src="./assets/img/YadraLogo 1.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="NavLinksDiv">
        <ul className="NavbarList">
          <li onClick={() => setIndex(0)}>
            <Link to="/" className={index === 0 ? "NavBtn active" : "NavBtn"}>
              Home
            </Link>
          </li>
          <li onClick={() => setIndex(2)}>
            <Link to="/categories" className={index === 2 ? "NavBtn active" : "NavBtn"}>
              Categories
            </Link>
          </li>
          <li onClick={() => setIndex(1)}>
            <Link to="/write-review" className={index === 1 ? "NavBtn active" : "NavBtn"}>
              contact us
            </Link>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      {authenticated && (
    <div className="LoginBtnDiv">
        <div className="LoginBtn" onClick={onLoginClick}>
            <div className="loginText">
                <p>Log in</p>
            </div>
            <div className="arrowBtn">
                <i className="fas fa-arrow-right"></i> {/* Font Awesome arrow icon */}
            </div>
        </div>
    </div>
)}
    </div>
  );
};

export default Navbar;