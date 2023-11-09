import React from 'react';
import './CompanyInfo.css'; 
 

function CompanyInfo() {
  return (
    <div className="another-container">
    <div className="container">
         <div className=" column">
         <div className="image-container">
      <img className="main-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-gSbFcnqHUVi9auqS90HkPgDzjRU9ouCYA&usqp=CAU" alt="Main Image" />
      <img className="left-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUUfcpv6b3tKWBNZjCUfijGi-eLPSFlKYLQ&usqp=CAU" alt="Left Image" />
      <img className="right-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSV3oXoOiIjHCj3K9o88H8ZTka6l7tPKwGg&usqp=CAU" alt="Right Image" />
    </div>
         </div>
         <div className="column">
           <div className="text">
           <h1 className="heading">WE ARE LEADING TALC MANUFACTURER, EXPORTER & TALC SUPPLIERS FROM PAKISTAN.</h1>
  <p className="paragraph">One of Pakistan’s fastest-growing soapstone suppliers, Jaza Minerals, was founded in 2012. The CEO of Jaza Minerals has ten years of expertise and is a skilled businessperson with an eye for detail. The culmination of JAZA MINERALS’ expertise, exploration, technological advancement, steady growth, and top-notch services made it possible for it to become a global exporter of soapstone.</p>
  <button>Career</button>

           </div>
         </div>
       </div>
     </div>
  );
}

export default CompanyInfo;
