import React from 'react';
import Card from '../components/Card';
import PageContent from '../components/PageContent';
import ImageCarousel from '../components/crousal';
import CompanyInfo from '../components/CompanyInfo';
import YourComponent from '../components/Services';
import Carousel from '../components/carousal';
import Info from '../components/Getintouch';
import Footer from '../components/Footer';


function Home() {
  return (
     
    <div>
  

      <Carousel />
     < ImageCarousel />
      <Card />

      <PageContent />
      
      <CompanyInfo />
      
      <YourComponent />
      
      <Info />
      <Footer />

  
      
  </div>
  );
}

export default Home;
