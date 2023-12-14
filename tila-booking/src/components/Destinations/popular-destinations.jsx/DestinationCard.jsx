import React from 'react';

const DestinationCard = ({ imageSrc, destinationName }) => {
  return (
    <div className="destination-card">
      <div className="destination-card__image-container">
        <img className="destination-card__image" src={imageSrc} alt={destinationName} />
        <div className="destination-card__name">{destinationName}</div>
      </div>
    </div>
  );
};

export default DestinationCard;