import React from 'react'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import hotelIcon from "../assets/images/hotel.png"
import hotelImage from "../assets/images/hotelImage.jpg"
import tourIcon from "../assets/images/tours.png"
import customizationImg from '../assets/images/customization.png'
import ServiceBigCard from '../services/ServiceBigCard'
import {NavLink} from "react-router-dom"

const servicesData = [
    {   
        id:"hotels",
        image: hotelImage,
        imgUrl: hotelIcon,
        title: "Hotels",
        desc: "Explore our exquisite selection of hotels offering luxurious accommodations, exceptional service, and breathtaking views for an unforgettable stay."
        },
        {
        id:"tours",
        image: hotelImage,
        imgUrl: tourIcon,
        title: "Tours and Activities",
        desc: "Discover unforgettable tours and activities. From adventurous hikes to cultural excursions, immerse yourself in the wonders of each destination."
        }
]

const Services = () => {
   return  <>
         <Container style={{ marginTop: '20px' }}>
            <Row className='mt-4'>
                  <h2 className="services__title text-center">Our Services</h2>
               </Row>
            <Row className='justify-content-center mt-4 m4-4'>
               {
                servicesData.map((item, index) => (
                <Col lg='3' md='6' sm='12' className='mb-4 h-100' key={index}>
                 <NavLink to={`/services/${item.id}`} style={{textDecoration: "none",color: 'black'}}>
                    <ServiceBigCard item={item} />
                 </NavLink>
             </Col>))
                }

            </Row>
         </Container>

    </>

}

export default Services
