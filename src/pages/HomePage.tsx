import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstBonde from "../components/FirstBonde";
import SecondBonde from "../components/SecondeBonde";
import ThirdBonde from "../components/ThirdBonde";
import FourthBonde from "../components/FourthBonde";
import FifthBonde from "../components/FifthBonde";
import CreateAccountCompany from "./CreateAccountCompany";
import CreateAccount from "../components/CreateAccount";
import CompanyPage from "./ComapnyPage";

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => setIsPopupOpen(true);

  // Function to close the popup
  const closePopup = () => setIsPopupOpen(false);
  // Dummy Data for companies
  const company1 = {
    company_logo: "./assets/img/heetch-djezzy 4.png",
    company_name: "Djezzy",
    company_slogan: "Djezzy is exactly what I've been looking for.",
    company_description: "Mobile network operators",
    rating: 3,
  };

  const company2 = {
    company_logo: "./assets/img/yassir.png",
    company_name: "Yassir",
    company_slogan: "Find a driver in short time, with best price, let's go",
    company_description: "Find your driver",
    rating: 4,
  };

  const company3 = {
    company_logo: "./assets/img/hamoud.png",
    company_name: "Hamoud Boualam",
    company_slogan: "Best soda with best price, Welcome",
    company_description: "Soda drink company",
    rating: 4,
  };

  // Dummy Data for ThirdBonde Categories
  const category1 = {
    name: "Technology",
    image: "./assets/img/tech.png",
  };

  const category2 = {
    name: "Bank",
    image: "./assets/img/bank.png",
  };

  const category3 = {
    name: "Cloths",
    image: "./assets/img/cloths.png",
  };

  return (
    <Router>
      <Navbar onLoginClick={openPopup} />
      <Routes>
      
        <Route
          path="/"
          element={
            <div>
              <FirstBonde />
              <SecondBonde
                company1={company1}
                company2={company2}
                company3={company3}
              />
              <ThirdBonde
                type1={category1}
                type2={category2}
                type3={category3}
              />
              <FourthBonde />
              <FifthBonde />
              
            </div>
          }
        />


        {/* Create Account Company Route */}
        <Route path="/create-account-company" element={<CreateAccountCompany />} />
        <Route path="/company/:companyName" element={<CompanyPage />} />
      </Routes>
      <CreateAccount isOpen={isPopupOpen} onClose={closePopup} />
      <Footer />

    </Router>
  );
}

export default HomePage;
