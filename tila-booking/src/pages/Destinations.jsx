import React, { useState } from 'react';
import "../components/Destinations/destinations.css"
import SearchBar from '../components/Destinations/search-bar/SearchBar';
import PopularDestinations from '../components/Destinations/popular-destinations.jsx/PopularDestinations';

const Destinations = () => {
  

  return (
    <div>
      <div className='search-bar-container'>
        <SearchBar />
      </div>
      <PopularDestinations />
    </div>
  );
};

export default Destinations;