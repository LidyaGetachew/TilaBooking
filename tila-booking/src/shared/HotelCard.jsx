import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tour-card.css'
import Rating from "@mui/material/Rating";

import calculateAvgRating from '../utils/avgRating'

const HotelCard = ({ hotel }) => {

   const { id, title, city, photo, minPrice, address, reviews,rating=3.5 } = hotel

   const { totalRating, avgRating } = calculateAvgRating(reviews)

   return (
      <div className='tour__card'>
        <Link to={`/tours/${id}`} style={{textDecoration:"none"}}>

         <Card>
            <div className="tour__img">
               <img src={photo} alt="hotel-img" />
            </div>

            <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__location d-flex align-items-center gap-1">
                     <i class='ri-map-pin-line'></i> {city}
                  </span>
                  <span className="tour__rating d-flex align-items-center gap-1">
                      {avgRating === 0 ? null : avgRating}
                     {totalRating === 0 ? ('no reviews') : (<span>/5 ({reviews.length} review{reviews.length > 1 && "s"})</span>)}

                  </span>
               </div>

               <h5 className='tour__title'><Link to={`/tours/${id}`}>{title}</Link></h5>
               <div className="rate-showing">
               <Rating
                    name="simple-controlled"
                    size="small"
                    value={rating}
                    precision={0.5}
                    readOnly
                    />
                </div>
                <div>{address}</div>
               <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                  <h5>from ${minPrice}</h5>

               </div>
            </CardBody>
         </Card>
        </Link>
      </div>
   )
}

export default HotelCard