import React from 'react'
import "./popular-destinations.css"
import DestinationCard from './DestinationCard';
import addisImg from "../../../assets/images/addis-abeba.jpg"
import axumImg from "../../../assets/images/axumImg.jpg"
import lalibelaImg from "../../../assets/images/lalibelaImg.jpg"
import gonderImg from "../../../assets/images/gonder.jpg"
import bahirdarImg from "../../../assets/images/bahir-dar.jpg"
import hararImg from "../../../assets/images/harar.jpg"
import { useNavigate } from 'react-router-dom';

const PopularDestinations = () => {
    const navigate = useNavigate()

    const destinations = [
        {id:1,name:"Addis Abeba",image:addisImg},
        {id:2,name:"Lalibela",image:lalibelaImg},
        { id: 3, name: 'Axum', image:axumImg },
        { id: 4, name: 'Gondar', image: gonderImg },
        { id: 5, name: 'Bahir Dar', image: bahirdarImg },
        { id: 6, name: 'Harar', image: hararImg},
       
        { id: 5, name: 'Bahir Dar', image: bahirdarImg },
        { id: 6, name: 'Harar', image: hararImg},
       
      ];
      const handleDestinationClick = (destination) => {
        navigate("/hotel/list", {
          state: {
            destination: destination.name,
            date: [
              {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
              }
            ],
            options: {
              adult: 1,
              children: 0,
              room: 1,
            }
          }
        });
      };
  return (
    <div className='popular-destinations-container'>
        <div className="destination-title">Popular Destinations</div>
        <div className='cards-container' >
            {destinations.map(destination =>(
            <div onClick={() =>handleDestinationClick(destination)  }>
                <DestinationCard imageSrc={destination.image} destinationName={destination.name} />
            </div>

            ))}
         </div>
    </div>
  )
}

export default PopularDestinations