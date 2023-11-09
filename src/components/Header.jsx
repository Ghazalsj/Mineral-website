import React from 'react';
import './Header.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Header() {
  return (
    <div className="header-container">
      <header className="header">
      <div className="logo">
          <img src="https://jazaminerals.com/wp-content/uploads/2019/08/logo-1-1-e1673561386247.png" alt="Logo" />
        </div>

        
        <div className="vertical-separator"></div>
        <div className="contact">
          <div className="contact-info">
            <div className="email-column">
            <div className="email">
            
      <i className="fa fa-envelope" aria-hidden="true"></i>
      
      <span className="email-text">Email us:</span>
      <span className="email-address"> abc@email.com</span>
      
    </div>
            </div>
            <div className="phone-column">
              <div className="phone">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span className="email-text">Make a Call:</span>
      <span className="email-address"> (123) 456-7890</span>
                 
              </div>
              <div className="phone">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                <span className="email-text">Message us:</span>
      <span className="email-address"> (456) 789-1230</span>
               
              </div>
            </div>
            <div className="vertical-separator"></div>
            <div className="button-column">
              <button className="header-button">Career</button>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default Header;


