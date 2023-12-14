import React, { useState } from 'react';
import "./map.css"
const MapCard = ({ mapImage, embedCode }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    console.log('opening..')
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="map-card">
      <img src={mapImage} alt="Map Image" />
      <button className="show-map-btn" onClick={openModal}>Show on Map</button>

      {modalVisible && (
        <div className="map-card-modal">
            <span className="close" onClick={closeModal}>&times;</span>
          <div className="map-modal-content">
            <div
              className="embed-container"
              dangerouslySetInnerHTML={{ __html: embedCode }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MapCard;