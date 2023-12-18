import "../components/Hotel/hotel.css"
import React ,{useState,useEffect,useRef}from "react";
import hotel from "../assets/data/hotelDetails"
import LinearProgress from '@mui/material/LinearProgress';
import SlideCards from '../shared/SlideCards';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import NewsLetter from "../shared/Newsletter";
import ReservationTable from "../components/Hotel/reservation-table/ReservationTable";
import { HotelSharp,QuestionAnswer,CheckCircle, RestaurantMenu,  Attractions,  AirplaneTicketOutlined, TourSharp, CheckCircleOutline, CheckSharp, Checklist, CheckCircleRounded, CheckCircleOutlineRounded, CheckCircleOutlined, AccessTime, East, West, Info, ChildCare, Person, Pets, Payment, Payments  } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import NearbyIcon from '@mui/icons-material/LocationOn';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import MapCard from "../shared/map/MapCard";
import { secondsInDay } from "date-fns/constants";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = hotel.photos

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const hotelDetailList= {
      id: 1,
      name: 'Dulux Room',
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug:'new-luxury-laptop',
      photo:'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price:19999,
      images:[
        {
          src:'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          src:'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        
      ],
      "colors":['#2287fa','#f71b1b','green'],
      infos:[
      {
        title:"highlights",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title:"materials",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title:"how to use",
        content:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title:"pro tips",
        content:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      ],
      discount:20,
      sold:52,
      catagory:'laptop',
      brand:'apple'

      
    }
  
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  const  convertRatingToExcellence = (rating) => {
    if (rating >= 8.5) {
      return "Excellent";
    } else if (rating >= 7.5) {
      return "Good";
    } else {
      return "Average";
    }
  }
  const calculateAverageRating =(categories) => {
    const ratings = Object.values(categories);
    const sum = ratings.reduce((accumulator, rating) => accumulator + rating, 0);
    const average = sum / ratings.length;
    return average.toFixed(1);
  }
  const renderQuestionAnswerCard = (card) => {
    return (
      <div className="question-answer-card">
        <div className="question">
          <QuestionAnswer className="question-icon" />
          <p>{card.question}</p>
        </div>
        <div className="answer">
          <CheckCircle className="answer-icon" />
          <p>{card.answer}</p>
        </div>
      </div>
    );
  };
  const renderValue = (value) => {
      if (typeof value === "object") {
        if (value instanceof Array) {
          return value.join(", ");
        } else {
          return renderNestedValue(value);
        }
      }
      return value;
    };
 
    const renderNestedValue = (value) => {
        if (value instanceof Array) {
          return value.join(", ");
        } else {
          return Object.entries(value).map(([nestedKey, nestedValue]) => (
            <React.Fragment key={nestedKey}>
              <strong>{nestedKey}</strong>
              <br />
              {renderValue(nestedValue)}
              <br />
              <br />
            </React.Fragment>
          ));
        }
      };
const [slideIndex,setSlideIndex]=useState(1);


const [width,setWidth]=useState(0);
const [start,setStart]=useState(0);
const [change,setChange]=useState(9);

const slideRef= useRef();

useEffect(()=>{
if(!slideRef.current) return;
const scrollWidth= slideRef.current.scrollWidth;
const childrenElementCount= slideRef.current.childrenElementCount;
const width=scrollWidth / childrenElementCount;
},[])

useEffect(()=>{
  if(!slideRef.current ||width) return;
  const numOfThumb=Math.round(slideRef.current.offserWidth /width);
  slideRef.current.scrollLeft=slideIndex>numOfThumb?(slideIndex-1):0
  },[width])
function plusSlides(n){
  setSlideIndex(prev=>prev + n);
  slideShow(slideIndex+ n);
 
}
//Drag
function dragStart(e){
  setStart(e.clientX)
}
function dragOver(e){
  let touch=e.clientX;
  setChange(start -touch);
}
function dragEnd(e){
  if(change>0){
    slideRef.current.scrollLeft+=width;
  }else{
    slideRef.current.scrollLeft-=width;
  }
}

function slideShow(n){

  if(n>hotelDetailList.images.length){setSlideIndex(1)};
  if(n<1){setSlideIndex(hotelDetailList.images.length)};
  setOpen(true);
}
  return (
    <div>
      <div className="hotelContainer">
      {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
        <section className="room-details">
          <div className="room-page-img">
          {
            hotelDetailList.images.map((image,index)=>(
              <div key={index} className="mySlides"
               style={{display:(index + 1) === slideIndex?"block":"none"}}>
                <div className="numbertext">{index+1} / {hotelDetailList.images.length}</div>
              <img src={image.src} alt="" />
              </div>
            ))
          }
          <a href="#!" className="prev" onClick={()=>plusSlides(-1)} >&#10094;</a>
          <a href="#!" className="next" onClick={()=>plusSlides(1)}>&#10095;</a>
          <div className="slider-img" draggable={true} ref={slideRef}
          onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
            {
                hotelDetailList.images.map((image,index)=>(
                  <div key={index} className={`slider-box ${index +1 ===slideIndex &&'active'}`}
                  onClick={()=>setSlideIndex(index+1)}>
                  <img src={image.src} alt="" />
                  </div>
                ))
            }
          </div>
          </div>

          <div className="room-page-details">
            <strong>{hotelDetailList.name}</strong>
            <p className="room-category">
              {hotelDetailList.brand} - {hotelDetailList.catagory}
            </p>
            <p className="room-price">
              ${Math.round(hotelDetailList.price -hotelDetailList.price*hotelDetailList.discount /100)}<del>{hotelDetailList.price}$</del>
            </p>
            <p className="small-desc">{hotelDetailList.desc}</p>
            <div className="room-options">

              {
               hotelDetailList.colors.map((color)=>(
                <div key={color}>
                    <button></button>
                </div>
              ))
              }
            </div>
            <div className="room-page-offer">
           <i class="fa fa-tag"/>{hotelDetailList.discount}% Discount
            </div>
            {/* <div className="room-sold">
              <img src="https://th.bing.com/th/id/OIP.DCiTkKCLh9H-VAgEhv4pMgHaHa?rs=1&pid=ImgDetMain" alt="SoldIcon" />
               <strong>{hotelDetailList.sold}<span>Products Sold</span> </strong>
            </div> */}
            <div className="cart-btns">
            <a href="#!" className='add-book'>Book</a>
          <a href="#!" className='book-now'>Book Now</a>
            </div>
          </div>

        </section >
         </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{hotel.title}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel.Address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {hotel.distance} from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${hotel.minPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="mapCardContainer">
               <MapCard mapImage={hotel.map.image} embedCode={hotel.map.code} />
            </div>
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
               {hotel.description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        <div className="popular-facilities">
          <div className="small-title">Most Popular facilities</div>
          {hotel.popular_facilities.map(facility => 
            (<div className="facility">
                {facility}
            </div>))}
        </div>
        <ReservationTable/>
        <div className="guest-reviews">
          <div className="medium-title">Guest Reviews</div>
          <div className="review-summary">
            <span className="rating-value">{calculateAverageRating(hotel.guest_reviews.categories)}</span>
            <span>{convertRatingToExcellence(calculateAverageRating(hotel.guest_reviews.categories))}</span>
            <span className="gray-text">{hotel.guest_reviews.totalReviews} reviews</span>
          </div>
          <div className="small-title">categories:</div>
          <div className="review-categories">
              {Object.entries(hotel.guest_reviews.categories).map(([name, value]) => (
                <div className="review-category">
                  <div className="review-category-info">
                    <span>{name}</span>
                    <span>{value.toFixed(1)}</span>
                  </div>
                  <div key={name} className="progress-bar-container">
                    <LinearProgress
                        variant="determinate"
                        value={value * 10}
                        className="custom-progress-bar"
                        style={{ height: '8px' ,borderRadius:"5px",flex: '1 0 auto'}}

                    />
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="property-Q&A">
          <div className="medium-title">Property questions and answers</div>
          <div>Browse questions from guests for anything extra you want to know about the property
            < SlideCards cards={hotel.propertyQA} renderCard={renderQuestionAnswerCard} />
         </div>     
        </div>
        <div className="medium-title">Hotel area info</div>
        <div className="hotel-area-info">
                <div>
                   <div className="small-title"><NearbyIcon />What's nearby</div>
                   <div className="nearby-container">
                      {hotel.hotelAreaInfo.nearby.map(item => (
                        <div className="nearby-items">
                            <span>{item.name}</span>
                            <span>{item.distance}</span>
                          </div>
                      ))}
                   </div>
                  </div>
                  <div>
                   <div className="small-title"><RestaurantMenu />Restaurants & cafes</div>
                   <div className="nearby-container">
                      {hotel.hotelAreaInfo.restaurantAndCafe.map(item => (
                        <div className="nearby-items">
                            <span >
                              <span style={{paddingRight:"10px",color:"gray"}}>{item.type}</span>
                              <span>{item.name}</span>
                            </span>
                            <span>{item.distance}</span>
                          </div>
                      ))}
                   </div>
                   </div>
                   <div>
                    <div className="small-title"><TourSharp />Top attractions</div>
                    <div className="nearby-container">
                        {hotel.hotelAreaInfo.topAttractions.map(item => (
                          <div className="nearby-items">
                              <span>{item.name}</span>
                              <span>{item.distance}</span>
                            </div>
                        ))}
                    </div>
                   </div>
                   <div>
                      <div className="small-title"><AirplaneTicketOutlined />Closest airports</div>
                      <div className="nearby-container">
                          {hotel.hotelAreaInfo.closestAirports.map(item => (
                            <div className="nearby-items">
                                <span>{item.name}</span>
                                <span>{item.distance}</span>
                              </div>
                          ))}
                      </div>
                    </div>
             </div>
                <div className="medium-title">Facilities of {hotel.title}</div>
             <div className="facilities-container">
                {Object.keys(hotel.facilities).map((key, index) => (
                <div key={index} className="facility-item">
                  <div className="small-title" style={{paddingBottom:"10px"}}>{key}</div>
                  <ul style={{padding:'0'}}>
                    {hotel.facilities[key].map((item, i) => (
                      <li key={i}><CheckCircleOutlined/>  {item}</li>
                    ))}
                  </ul>
                </div>
            ))}
             </div>
             <div className="medium-title">House rules</div>
             <small>{hotel.title} takes special requests – add in the next step!</small>
             <div className="house-rules">
               <table>
                <tbody>
                  <tr>
                    <td><East/> Check-in</td>
                    <td>{hotel.houseRules["Check-in"]}</td>
                  </tr>
                  <tr>
                    <td><West/> Check-out</td>
                    <td>{hotel.houseRules["Check-out"]}</td>
                  </tr>
                  <tr>
                    <td><Info/> Cancellation/prepayment</td>
                    <td>{hotel.houseRules["Cancellation/prepayment"]}</td>
                  </tr>
                  <tr>
                    <td><ChildCare /> Children & Beds</td>
                    <td>
                      <strong style={{marginBottom:"10px"}}>Child policies</strong><br />
                      {hotel.houseRules["Children & Beds"]["Child policies"]}
                      <br />
                     <strong>Crib and extra bed policies</strong><br />
                      {hotel.houseRules["Children & Beds"]["Crib and extra bed policies"]}
                    </td>
                  </tr>
                  <tr>
                    <td><Person/> Age restriction</td>
                    <td>{hotel.houseRules["Age restriction"]}</td>
                  </tr>
                  <tr>
                    <td><Pets /> Pets</td>
                    <td>{hotel.houseRules["Pets"]}</td>
                  </tr>
                  <tr>
                    <td><Payment /> Accepted payment methods</td>
                    <td>{hotel.houseRules["Accepted payment methods"]['cards']}<br/>
                    {hotel.houseRules["Accepted payment methods"]["Reservation"]}</td>
                  </tr>
                </tbody>
              </table>
             </div>
             <table className="faq-table">
              <tr rowSpan="">
                <td rowSpan={hotel.faqs.length + 1}>
                  <div className="faq-title">FAQs about {hotel.title}</div>
                </td>
              </tr>
              {hotel.faqs.map((faq,index) =>(
                <tr>
                  <td>
                     <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                         <Typography variant="body-text"><b>{faq.question}</b></Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography variant="body-text">{faq.answer}</Typography>
                      </AccordionDetails>
                     </Accordion>
                  </td>
                </tr>
              ))}
             </table>
        <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Hotel;