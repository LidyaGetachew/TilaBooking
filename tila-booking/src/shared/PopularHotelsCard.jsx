import React from "react";
import HotelCard from "./HotelCard";
import {Row,Col} from "reactstrap"
const PopularHotelsCard = ({ name, hotels }) => {

  const filteredHotels = hotels.filter((hotel) => hotel.city === name || hotel.country === name);

  return (
    <>
    <h4 style={{paddingBottom:"10px"}}>Popular Hotels in {name}</h4>
    <Row>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel =>(
            <Col lg='3' md='6' sm='6' className='mb-4' key={hotel._id}> <HotelCard hotel={hotel} /> </Col>
            ))
  
        ) : (
          <p>No hotels found in {name}</p>
        )}
      </Row>
          </>
  );
};

export default PopularHotelsCard;