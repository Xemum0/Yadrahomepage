import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/FormComponent.css";

function FormComponent() {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    websiteLink: "",
    email: "",
    phoneNumber: "",
    description: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    websiteLink: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phoneNumber: "",
      websiteLink: "",
    };

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Phone number must be at least 10 digits.";
      isValid = false;
    }

    if (
      formData.websiteLink &&
      !/^https?:\/\/[^\s]+$/.test(formData.websiteLink)
    ) {
      newErrors.websiteLink = "Website link must be a valid URL.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data Submitted:", {
        ...formData,
        selectedItem,
        selectedDate,
      });

      // Show popup and hide it after 3 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        window.location.href = "/";
      }, 3000);
    }
  };

  return (
    <div className="popup-overlayy">
      {!false && (
        <div className="popup-containerr">
          <div className="popup-left">
            <h2>Real Voices, Real Impact:</h2>
            <p>Share Your Experience, Shape Tomorrow</p>

            <motion.img
              src="./assets/img/Abstraction.png"
              alt="Illustration"
              className="popup-image"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="popup-right">
            <h3>You received an SMS code</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  placeholder="Jack Spawn"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <span className="error">{errors.fullName}</span>
                )}
              </label>

              <label>
                Website link:
                <input
                  type="text"
                  name="websiteLink"
                  placeholder="https://example.com"
                  value={formData.websiteLink}
                  onChange={handleInputChange}
                />
                {errors.websiteLink && (
                  <span className="error">{errors.websiteLink}</span>
                )}
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>

              <label>
                Phone number:
                <div className="phone_num">
                  <input
                    name="phoneNumber"
                    placeholder="Enter your number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  <button type="button" className="verify">
                    Verify
                  </button>
                </div>
              </label>
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}

              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  placeholder="Describe"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Social media:
                <input
                  type="text"
                  name="facebook"
                  placeholder="Facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="item-select">Select an item:</label>
              <select
                id="item-select"
                value={selectedItem}
                onChange={handleChange}
              >
                <option value="">Select an item</option>
                <option value="Finance">Finance</option>
                <option value="Technology">Technology</option>
                <option value="Alimentation">Alimentation</option>
                <option value="Network">Network</option>
              </select>

              <label htmlFor="date">Creation date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
              {selectedDate && <p>Selected Date: {selectedDate}</p>}

              <button type="submit">Send request</button>
            </form>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="message_container">
          <div className="popup-message">
            <div className="popup-content">
              <div className="upper_message_sent">
                <h2>Thank You for Your Request!</h2>
                <motion.img
                  src="./assets/img/send-data 1.png"
                  alt=""
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <p>We've received your application to join our platform.</p>
              <p>
                Our team is carefully reviewing your submission and will send a
                detailed response to your registered email shortly.
              </p>
              <p>
                We appreciate your interest in transparent customer feedback!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
