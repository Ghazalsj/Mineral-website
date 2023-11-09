import React from "react";
import './Info.css'; 


const Info = () => {
   
      return (
        <div className="container">
          <div className="column">
            <div>
            <h3>OUR COMPANY</h3>
            <p>Jaza Minerals was established in 2012 as one of the fastest-growing soapstone providers in Pakistan. Our company’s CEO is a young and energetic professional with an eye for the stone business around the globe and has experience of 10 years.</p>
          </div>
          </div>
          <div className="column">
            <div>
            <h3>CORPORATE INFO</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Catalogue</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          </div>
    
          <div className="column">
            <div>
            <h3>GET IN TOUCH</h3>
            <p>Office # R – 209 SECTOR -8 NORTH KARACHI, Karachi - Pakistan.</p>
            <p>PLOT NO 49, NA CLASS No 1, DEH MOACH, KARACHI, KARACHI WEST BALDIA TOWN.</p>
            <p>‎+92 21 36949426</p>
            <p>+92-3218790952</p>
            <p>info@jazaminerals.com</p>
          </div>
        </div>
        </div>
      );
    };
    
   
    

export default Info;
