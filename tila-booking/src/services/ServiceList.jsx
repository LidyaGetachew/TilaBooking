import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Personalized Activities`,
      desc: `Enjoy a wide range of personalized activities tailored just for you, from adventurous hikes to relaxing spa treatments.`,
   },
   {
      imgUrl: guideImg,
      title: `Luxurious Accommodations`,
      desc: `Discover our collection of luxurious hotels with breathtaking views and exceptional service for an unforgettable stay.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Seamless Travel',
      desc: `Enjoy a wide range of personalized activities tailored just for you, from adventurous hikes to relaxing spa treatments.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList
