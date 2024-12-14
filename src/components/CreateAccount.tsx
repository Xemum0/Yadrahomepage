import { useState } from "react";
import "../assets/styles/CreateAccount.css";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateAccount: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    mix: "", // Used for phone/email in login mode
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    mix: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const validateForm = () => {
    let errors = { fullName: "", email: "", phone: "", password: "", mix: "" };
    let isValid = true;

    if (
      !formData.email ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.phone || !/^\+?\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    if (!isLogin && !formData.fullName) {
      errors.fullName = "Full name is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const validateOtp = () => {
    // This is where OTP validation logic would be integrated
    if (otp !== "123456") { // Replace with real OTP validation
      setOtpError("Invalid OTP. Please try again.");
      return false;
    }
    setOtpError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOtpVisible) {
      if (validateOtp()) {
        console.log("OTP validated. Account created!");
      }
    } else {
      if (validateForm()) {
        console.log("Form submitted successfully! Now show OTP.");
        setIsOtpVisible(true);
      }
    }
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setFormErrors({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      mix: "",
    });
    setFormData({ fullName: "", email: "", phone: "", password: "", mix: "" });
    setIsOtpVisible(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-left">
          <h2>Real Voices, Real Impact:</h2>
          <p>Share Your Experience, Shape Tomorrow</p>
          <img
            src="./assets/img/Abstraction.png"
            alt="Illustration"
            className="popup-image"
          />
        </div>
        <div className="popup-right">
          <h3>{isLogin ? "Log in" : "Create an account"}</h3>
          <form onSubmit={handleSubmit}>
            {!isOtpVisible && (
              <>
                {!isLogin && (
                  <label>
                    Full Name:
                    <input
                      type="text"
                      placeholder="Full name"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {formErrors.fullName && (
                      <span className="error">{formErrors.fullName}</span>
                    )}
                  </label>
                )}
                {!isLogin && (
                  <label>
                    Email:
                    <input
                      type="email"
                      placeholder="Email address"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </label>
                )}
                {!isLogin && (
                  <label>
                    Phone Number:
                    <input
                      type="text"
                      placeholder="Phone number"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {formErrors.phone && (
                      <span className="error">{formErrors.phone}</span>
                    )}
                  </label>
                )}
                {isLogin && (
                  <label>
                    Phone Number or email:
                    <input
                      type="text"
                      placeholder="Phone or email"
                      id="mix"
                      value={formData.mix}
                      onChange={handleChange}
                    />
                    {formErrors.mix && (
                      <span className="error">{formErrors.mix}</span>
                    )}
                  </label>
                )}
                <label className="password-label">
                  Password:
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="password-input"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="password-toggle-button"
                      onClick={togglePasswordVisibility}
                    >
                      <span className="eye-icon">
                        {showPassword ? <IoMdEyeOff /> : <IoMdEye />}{" "}
                      </span>
                    </button>
                  </div>
                  {formErrors.password && (
                    <span className="error">{formErrors.password}</span>
                  )}
                </label>

                <button type="submit">{isLogin ? "Log in" : "Next"}</button>
              </>
            )}

            {isOtpVisible && (
              <>
                <label>
                  Enter OTP:
                  <input
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                  {otpError && <span className="error">{otpError}</span>}
                </label>

                <button type="submit">Verify OTP</button>
              </>
            )}

            <span className="inline-text">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <p className="login2" onClick={toggleForm}>
                {isLogin  ? "Create account" : "Log in"}
              </p>
            </span>

            <button className="close-button" onClick={onClose}>
              X
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;