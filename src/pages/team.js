import React from 'react';
import Info from '../components/Getintouch';
import Footer from '../components/Footer';
import './team.css'; 

const team = () => {
  
    const images = [
      {
        id: 1,
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAaVBMVEX///8AAADFxcXn5+f39/dFRUXi4uKFhYXw8PDd3d16enqenp7Kysr8/PyIiIj09PS9vb1ycnIICAiwsLCOjo5jY2O2trYkJCQfHx8rKyvR0dGmpqY9PT0SEhIYGBhWVlYzMzOWlpZOTk6PqwUWAAADG0lEQVRoge2Z6ZqqMAyGZasUWaosKriM3v9FjnRBPUMBW8I855m8P23rR9s0SdPVCkEQBEEQBEGQ/4GQxoyxmIa/It6UJ0dwKpulP4FGzjsRXVA92zo/2WZLybu7HvkH7jLymxfJ3eX1WzZLyBeddpnXlNI6L8/qpwJevpt9/txvP19sBWI10+Tt50StSgwrH+7F0v80NSYM4QDrCdZilnVPUy2a1pDyRGiw3sZKNBJA/e3gFMXibOHkw0MrcNRtcXgEtoBq5IyJs1mB6fPl33nadg94A7ifKwc6lG2HM5S8z6d3G+hx4z18IH06GuVc0BMofO9QokFBfXA8OjuygH6f71XUoz1sIAPOV8BA9z8ZzTFS3iMZ6GEFD76l/u8Tfv73UPKraGR5xQZFYPrieKfa9nTUQdjh8wB30S0AufDwCOX+Vir31UWActQ+bfH4DJ2mt1FE34s+PM6AzL77QrxMv2AzcD/QqcgvCwB3v0VmoE75vsxe6cBnnxwmhZz0GQhpqn4ccs4zUSkt5xxVzGVV1F3/AFO/F3TX775bEQgk6JUPwPe+Y9Mjv8jlX+E3xzfxYwN87n5SF7IAdioLqIxnhNAjhHi/Uv5D/iRJRmjs6ogpycCS3wducdX53s4HX1OgGFT/W3LWE83vD+r7ZPWW+7xfEE6fe7cGM7old/+x/OMaNFs0Lp5/ei+qmHg6SFwVL/s0UyberX2wmfLEEDZdejDLTUzJB9XUEOtXwXwfcJN/lX7yvJKphHSoWDUJlW1+WlNRdXrLjFRUFJ3D56kdOYihdtexq5A3eVyTH3C1kZeXDTNnJh8ELNyAvO2ZZrYiS7a4EYrpfxmP/+LjzePh3WL1W8QO3E2H052tAXHz3Zk+DW9s7UcWrEzth1vfyeZZOeM3lMBssH+2d+E8eJzNTkBtab0tzMKC8xn8p/DfudHYph16sUujQl6w66/XjVFYm58yQLNEKLX0ni3Cg+srxkOsZ9M3e5NGfdT/y/rc/9o+pm/N/W/yyB72tjVV8ri6Xg1rIknM7C/RIYshSzIIgiAIgiAIgkznG+vwHJ82DGwJAAAAAElFTkSuQmCC',
        heading: 'Johc Marcy',
        paragraph: 'Financial Controller',
      },
      {
        id: 2,
        url: 'data:image/jpeg;base64,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',
        heading: 'Gill',
        paragraph: 'Operations Manager',
      },
      {
        id: 3,
        url: 'data:image/jpeg;base64,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',
        heading: 'Martin',
        paragraph: 'Sales Manager.',
      },
      {
        id: 4,
        url: 'data:image/png;base64,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',
        heading: 'Shashu',
        paragraph: 'IT Specialist',
      },
      {
        id: 5,
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAaVBMVEX///8AAADFxcXn5+f39/dFRUXi4uKFhYXw8PDd3d16enqenp7Kysr8/PyIiIj09PS9vb1ycnIICAiwsLCOjo5jY2O2trYkJCQfHx8rKyvR0dGmpqY9PT0SEhIYGBhWVlYzMzOWlpZOTk6PqwUWAAADG0lEQVRoge2Z6ZqqMAyGZasUWaosKriM3v9FjnRBPUMBW8I855m8P23rR9s0SdPVCkEQBEEQBEGQ/4GQxoyxmIa/It6UJ0dwKpulP4FGzjsRXVA92zo/2WZLybu7HvkH7jLymxfJ3eX1WzZLyBeddpnXlNI6L8/qpwJevpt9/txvP19sBWI10+Tt50StSgwrH+7F0v80NSYM4QDrCdZilnVPUy2a1pDyRGiw3sZKNBJA/e3gFMXibOHkw0MrcNRtcXgEtoBq5IyJs1mB6fPl33nadg94A7ifKwc6lG2HM5S8z6d3G+hx4z18IH06GuVc0BMofO9QokFBfXA8OjuygH6f71XUoz1sIAPOV8BA9z8ZzTFS3iMZ6GEFD76l/u8Tfv73UPKraGR5xQZFYPrieKfa9nTUQdjh8wB30S0AufDwCOX+Vir31UWActQ+bfH4DJ2mt1FE34s+PM6AzL77QrxMv2AzcD/QqcgvCwB3v0VmoE75vsxe6cBnnxwmhZz0GQhpqn4ccs4zUSkt5xxVzGVV1F3/AFO/F3TX775bEQgk6JUPwPe+Y9Mjv8jlX+E3xzfxYwN87n5SF7IAdioLqIxnhNAjhHi/Uv5D/iRJRmjs6ogpycCS3wducdX53s4HX1OgGFT/W3LWE83vD+r7ZPWW+7xfEE6fe7cGM7old/+x/OMaNFs0Lp5/ei+qmHg6SFwVL/s0UyberX2wmfLEEDZdejDLTUzJB9XUEOtXwXwfcJN/lX7yvJKphHSoWDUJlW1+WlNRdXrLjFRUFJ3D56kdOYihdtexq5A3eVyTH3C1kZeXDTNnJh8ELNyAvO2ZZrYiS7a4EYrpfxmP/+LjzePh3WL1W8QO3E2H052tAXHz3Zk+DW9s7UcWrEzth1vfyeZZOeM3lMBssH+2d+E8eJzNTkBtab0tzMKC8xn8p/DfudHYph16sUujQl6w66/XjVFYm58yQLNEKLX0ni3Cg+srxkOsZ9M3e5NGfdT/y/rc/9o+pm/N/W/yyB72tjVV8ri6Xg1rIknM7C/RIYshSzIIgiAIgiAIgkznG+vwHJ82DGwJAAAAAElFTkSuQmCC',
        heading: 'Naveed',
        paragraph: 'Warehouse Operator',
      },
    ];
  
    
  
  
  return (
    <div className="de-container">
    <div className="container">
    <div className="column">
      <span className="heading">HELLO EVERYONE 
<br/> METT HERE!</span>
    </div>
    <div className="separator">
      <span>|</span>
    </div>
    <div className="column">
      <span className="company-info">
        Jaza Minerals - Established in 2012 <br/>  Fastest-growing soapstone provider in<br/> Pakistan
      </span>
    </div>
  </div>
  <div className="custom-image-container">
      {images.map((image) => (
        <div key={image.id} className="custom-image-item">
          <img src={image.url} alt={`Image ${image.id}`} />
          <div className="custom-image-info">
            <h3>{image.heading}</h3>
            <p>{image.paragraph}</p>
          </div>
        </div>
        ))}
      </div>
  <Info />
<Footer />
     
  </div>
  )
};

export default team;