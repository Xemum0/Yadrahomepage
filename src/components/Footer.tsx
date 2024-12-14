import "../assets/styles/components.css";

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer(){
  const items1 = ['Links', 'About', 'Categories','Write review'];
  const items2=['Company','Where we are','Career','Our story'];
  const items3=['Contact','Getting started','Pricing','call center'];

  return (

  <footer>
    <div className="upperFooter">
      <div className="left_part_footer">
        <h1>Yadra</h1>
        <p >We help you to find<br/>your choice</p>
          <div className="icon-container">
          <a href="#" className="icon"><FaFacebookF /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaTwitter /></a>
          
        </div>
        
        
        
        
      </div>
      <div className="right_part_footer">
        <ul className="no-style-list">
          <li><a href="#">Links</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Write review</a></li>
          
        </ul>
        <ul className="no-style-list">
          <li><a href="#">Company</a></li>
          <li><a href="#">Where we are</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Our story</a></li>
        </ul>
        <ul className="no-style-list">
          <li><a href="#">Contact</a></li>
          <li><a href="#">Getting started</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">call center</a></li>
        </ul>
        
        </div>
    </div>
    <p >2024 all Right Reserved Term of use © Yadra </p>
  </footer>)
}
export default Footer;