import React from 'react';
import './service-card.css';

const ServiceBigCard = ({ item }) => {
  const {imgUrl, title, desc } = item;

  const iconStyle = {
    filter: 'invert(100%)',
    width: '50%', 
    height: '50%',
     objectFit: 'cover' 
  };
 

  return (
    <div className="service__item service__item_big mx-auto" >
      <div className="service__img float-right" style={{ width: '100px', height: '100px' }}>
        <img  src={imgUrl} alt="" style={iconStyle} />
      </div>
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceBigCard;