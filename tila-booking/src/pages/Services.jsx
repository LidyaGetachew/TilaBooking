import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ServiceBigCard from '../services/ServiceBigCard';
import hotelIcon from '../assets/images/hotel.png';
import tourIcon from '../assets/images/tours.png';
import hotelImage from '../assets/images/hotelImage.jpg';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import '../services/services.css'; // Import the CSS file

const servicesData = [
  {
    id: 'hotels',
    image: hotelImage,
    imgUrl: hotelIcon,
    title: 'Hotels',
    desc:
      'Explore our exquisite selection of hotels offering luxurious accommodations, exceptional service, and breathtaking views for an unforgettable stay.',
  },
  {
    id: 'tours',
    image: hotelImage,
    imgUrl: tourIcon,
    title: 'Tours and Activities',
    desc:
      'Discover unforgettable tours and activities. From adventurous hikes to cultural excursions, immerse yourself in the wonders of each destination.',
  },
];

const Services = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row className="mt-4">
        <h2 className="services__title text-center">Our Services</h2>
      </Row>
      <Row className="justify-content-center mt-4">
        {servicesData.map((item, index) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
            <NavLink
              to={`/services/${item.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ServiceBigCard item={item} />
            </NavLink>
          </Col>
        ))}
      </Row>
      <Row className="mt-4 service-box">
          <h3>Hotels</h3>
        <Col lg="3">
          <div className="service-section">
            <div className="service-image">
              <img src={hotelImage} alt="Hotels" />
            </div>
          </div>
        </Col>
        <Col lg="9" className="d-flex align-items-center ">
          <div className="service-description">
            <p>
              At our agency, we take pride in providing exceptional hotel accommodations to enhance your travel experience. Whether you're seeking a cozy boutique hotel or a luxurious beachfront resort, we have carefully selected a range of options to cater to all types of travelers. Our hotels offer a comfortable and inviting atmosphere, ensuring you have a relaxing and enjoyable stay. From stylish and modern interiors to breathtaking views, each hotel is designed to create a memorable and immersive experience for our guests. Indulge in world-class amenities, including exquisite dining options that showcase the local flavors and culinary expertise of the region. Unwind and rejuvenate at our spas, where skilled therapists offer a range of treatments to pamper and revitalize your senses. We understand that every traveler has unique preferences, so we offer a variety of hotel options to suit different budgets and tastes.
            </p>
            <p>
              We believe that the right hotel can enhance your travel experience and create lasting memories. That's why we go the extra mile to curate a collection of hotels that meet our high standards of quality, comfort, and hospitality. When you book with our agency, you can rest assured that your hotel stay will be exceptional. Let us take care of your accommodation needs and make your journey truly unforgettable.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 service-box">
            <h3>Tours and Activities</h3>
        <Col lg="3">
          <div className="service-section">
            <div className="service-image">
              <img src={tourIcon} alt="Tours and Activities" />
            </div>
          </div>
        </Col>
        <Col lg="9" className="d-flex align-items-center">
          <div className="service-description">
            <p>
  Immerse yourself in the wonders of each destination with our curated selection of tours and activities. Whether you're seeking adventure, cultural experiences, or simply want to explore the local attractions, we have a range of options to suit every traveler. Our tours are led by experienced guides who are passionate about sharing their knowledge and love for the destination. They will take you off the beaten path and provide insights that will enhance your understanding and appreciation of the local culture, history, and natural beauty. From thrilling outdoor adventures like hiking, snorkeling, and wildlife safaris, to immersive cultural experiences such as cooking classes, city tours, and visits to historical landmarks, our tours offer something for everyone. You'll have the opportunity to connect with locals, sample authentic cuisine, and create lasting memories as you explore the hidden gems and iconic sites of each destination.
</p>

<p>
  When it comes to tours and activities, we believe in offering experiences that go beyond the ordinary. We carefully curate our collection to ensure that each tour is unique, enriching, and designed to create unforgettable moments. Whether you're a solo traveler, a couple, or a family, our diverse range of activities caters to all interests and preferences. Discover the vibrant street markets and bustling neighborhoods of a city, embark on a scenic hike through breathtaking landscapes, or immerse yourself in the traditions and customs of a local community. Our tours are designed to be immersive, educational, and respectful of the environment and local cultures. With our expert guides, you'll gain a deeper understanding of the destinations you visit, forge connections with the people you meet along the way, and create lifelong memories that will stay with you long after the journey ends.
</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;