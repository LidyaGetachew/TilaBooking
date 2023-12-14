import React, { useState, useRef, useEffect } from 'react';
import './searchbar.css';
import { SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const blurTimeoutRef = useRef(null);

  const destinations = [
    { id: 1, name: 'Addis Ababa' },
    { id: 2, name: 'Lalibela' },
    { id: 3, name: 'Axum' },
    { id: 4, name: 'Gondar' },
    { id: 5, name: 'Bahir Dar' },
    { id: 6, name: 'Harar' },
    { id: 7, name: 'Danakil Depression' },
    { id: 8, name: 'Simien Mountains' },
    { id: 9, name: 'Omo Valley' },
    { id: 10, name: 'Lake Tana' },
  ];

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setShowResults(false);
      setIsFocused(false);
    }, 200);
  };

  const handleDestinationClick = (destination) => {
    clearTimeout(blurTimeoutRef.current);
    navigate('/hotel/list', {
      state: {
        destination: destination.name,
        date: [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          },
        ],
        options: {
          adult: 1,
          children: 0,
          room: 1,
        },
      },
    });
  };

  useEffect(() => {
    return () => {
      clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="input-wrapper">
        <SearchOutlined />
        <input
          placeholder="Enter Destination..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
            setShowResults(true);
          }}
          onBlur={handleBlur}
        />
      </div>
      {isFocused && showResults && (
        <div className="search-results-list">
          {filteredDestinations.map((destination) => (
            <div
              className="single-search-result"
              key={destination.id}
              onClick={() => handleDestinationClick(destination)}
            >
              {destination.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;