import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slidecards.css';

const SlideCards = ({ cards, renderCard }) => {
    
    const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow custom-prev-arrow">
        &lt;
    </button>
    );

    const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow custom-next-arrow">
        &gt;
    </button>
    );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} className="slide-cards-container">
      {cards.map((card, index) => (
        <div key={index}>{renderCard(card)}</div>
      ))}
    </Slider>
  );
};

export default SlideCards;