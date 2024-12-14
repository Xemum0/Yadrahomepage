import { FaArrowRight } from 'react-icons/fa';
import Card2 from './Card2';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/styles/secondBonde.css';

interface CompanyInfo {
  company_logo: string;
  company_name: string;
  company_slogan: string;
  company_description: string;
  rating: number;
}

interface SecondeProps {
  company1: CompanyInfo;
  company2: CompanyInfo;
  company3: CompanyInfo;
}

function SecondBonde({ company1, company2, company3 }: SecondeProps) {
  return (
    <div className='secondbonde'>
      {/* Animate each Card component */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        <Link to={`/company/${company1.company_name}`} className="card-link"> {/* Link to a dynamic route */}
          <Card2
            image_source={company1.company_logo}
            company_name={company1.company_name}
            company_slogan={company1.company_slogan}
            company_description={company1.company_description}
            rating={company1.rating}
            progress={20}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <Link to={`/company/${company2.company_name}`} className="card-link"> {/* Link to a dynamic route */}
          <Card2
            image_source={company2.company_logo}
            company_name={company2.company_name}
            company_slogan={company2.company_slogan}
            company_description={company2.company_description}
            rating={company2.rating}
            progress={100}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
      >
        <Link to={`/company/${company3.company_name}`} className="card-link"> {/* Link to a dynamic route */}
          <Card2
            image_source={company3.company_logo}
            company_name={company3.company_name}
            company_slogan={company3.company_slogan}
            company_description={company3.company_description}
            rating={company3.rating}
            progress={60}
          />
        </Link>
      </motion.div>

      {/* Animate the sentence and button */}
      <motion.div
        className='sentence'
        initial={{ opacity: 0, y: +50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      >
        <h1>Recent reviews</h1>
        <p>
          Real experiences from <br />
          verified customers <br />
          across the globe
        </p>

        <motion.button
          className='see-more-btn'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>See more</span>
          <FaArrowRight className='arrow-icon' />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default SecondBonde;