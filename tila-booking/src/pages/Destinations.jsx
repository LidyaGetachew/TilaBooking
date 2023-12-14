import React, { useState } from 'react';
import "../components/Destinations/destinations.css"
import SearchBar from '../components/Destinations/search-bar/SearchBar';
import PopularDestinations from '../components/Destinations/popular-destinations.jsx/PopularDestinations';
import NewsLetter from '../shared/Newsletter';

const Destinations = () => {
  

  return (
    <div className='destination-wrapper'>
      <div className='search-bar-container'>
        <SearchBar />
      </div>
      <PopularDestinations />
      <NewsLetter />
    </div>
  );
};

export default Destinations;