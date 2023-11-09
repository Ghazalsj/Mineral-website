import React from 'react';
import { FaMoneyCheck, FaClock, FaMedal } from 'react-icons/fa';
import './Card.css';

const Card = () => {
  const cardData = [
    {
      title: 'COMPETITIVE RATES',
      description: 'Latest equipment ensures low energy consumption, lowering cost of production.',
      icon: <FaMoneyCheck />,
    },
    {
      title: 'QUALITY COMMITMENT',
      description: 'Our state of the art equipment gives a wide range of fineness.',
      icon: <FaClock />,
    },
    {
      title: 'LEAD TIME',
      description: 'High production capacity ensures fulfillment of large orders in lead time.',
      icon: <FaMedal />,
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
