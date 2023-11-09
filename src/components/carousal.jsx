import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './carousal.css';


export default function carousel() {

  const carouselItemStyle = {
    position: 'relative',
    animation: 'fadeInAndSlideDown 1s ease',
    
  };
  const imageStyle = {
    maxWidth: '100%',
    height: '600px',
    objectFit: 'cover',
    borderRadius: '5px',
  
    animation: 'fadeInAndSlideDown 1s ease 0.5s', 
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'maroon',
    textAlign: 'center',
    animation: 'fadeInAndSlideDown 1s ease 0.5s', 

  }
  
  return (
    <MDBCarousel showControls showIndicators dark fade>
       <style>
        {`
        
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        style={carouselItemStyle}
       >
         <img
          src='https://static.vecteezy.com/system/resources/previews/015/139/369/large_2x/rough-talc-stone-on-white-photo.jpg'
          alt='Slide 1'
          style={imageStyle}
        />
        <div style={textStyle}>
          <h2>TALC STONES</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        style={carouselItemStyle}
        >
         <img
          src='https://minerals.net/MineralImages/green-talc-chester-vermont.jpg'
          alt='Slide 2'
          style={imageStyle}
        />
        <div style={textStyle}>
          <h3>TALK STONES</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>


      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        style={carouselItemStyle}
        >
         <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4ZypK0lkvtK-8Nt3414dJ8juEFb9xElGUg&usqp=CAU'
          alt='Slide 3'
          style={imageStyle}
        />
        <div style={textStyle}>
          <h1>TALC STONES</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

