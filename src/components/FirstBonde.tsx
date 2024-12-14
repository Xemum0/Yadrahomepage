import "../assets/styles/research.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

var companiesNum = 5000;
var reviewsNum = 5000;

function FirstBonde() {
  return (
    <div className="background">
      <div className="first-bonde">
        <div className="content">
          <h1 className="headline">
            Behind every review
            there is an experience
            <br />
            that matters
          </h1>
          <div className="stats-container">
            <div className="stat">
              <p className="companies-reviews">+{companiesNum}</p>
              <p className="state">Companies</p>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <p className="companies-reviews">+{reviewsNum}</p>
              <p className="state">Reviews</p>
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a company ..."
              className="search-input"
            />
            
            <button className="search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="beggest-container">
        <motion.img
            src="./assets/img/beautyarrow.svg"
            alt="Handshake illustration"
            className="arrow-beauty"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          />
             <motion.img
            src="./assets/img/arrow-down.svg"
            alt="Handshake illustration"
            className="arrow-down"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          />
        <div className="image-container">
          {/* Animate the first image */}
         
          <motion.img
            src="./assets/img/image 1.png"
            alt="Handshake illustration"
            className="illustration image2"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          />
          
          {/* Animate the second image */}
          <motion.img
            src="./assets/img/Rectangle 2.png"
            alt="rectangle"
            className="illustration image1"
            initial={{ opacity: 0, x: -20 }} // Start with opacity 0 and slightly moved to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          />
        </div>

        </div>
       
      </div>
    </div>
  );
}

export default FirstBonde;
