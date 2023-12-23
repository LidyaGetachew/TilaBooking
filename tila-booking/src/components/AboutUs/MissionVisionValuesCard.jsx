import React from 'react';

const MissionVisionValuesCard = ({ icon, title, statement }) => {
  return (
    <div className="mission-card">
      <div className="mision-icon-container">
        <span className="mision-icon">{icon}</span>
      </div>
      <h6 className="mision-title">{title}</h6>
      <p className="mision-statement">{statement}</p>
    </div>
  );
};

export default MissionVisionValuesCard;