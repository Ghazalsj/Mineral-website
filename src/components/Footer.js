import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaInstagram, FaWhatsapp ,FaLinkedin} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        © 2023, Jaza Minerals. All Rights Reserved by Jaza Minerals
      </div>
      <div className="middle">
        
        <img src="https://jazaminerals.com/wp-content/uploads/2019/08/logo-2-300x71.png" alt="Logo" />
      </div>
      <div className="right">
        <a href="#" className="social-link"><FaFacebook  /></a>
        <a href="#" className="social-link"><FaInstagram /></a>
        <a href="#" className="social-link"><FaWhatsapp  /></a>
      </div>
    </footer>
  );
};

export default Footer;
