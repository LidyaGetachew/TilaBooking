import hotelImg1  from "../../../assets/images/hotelImg1.jpg"
import hotelImg2  from "../../../assets/images/hotelImg2.jpg"
import hotelImg3  from "../../../assets/images/hotelImg3.jpg"
import React from "react";
import './SearchItem.css'
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate = useNavigate()
  return(
    <div className="searchItem">
      <img src={hotelImg1} 
      alt=""
      className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
           Entire studio . 1 bathroom . 21m2 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can  cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span >Excellent</span>
            <button >8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Include taxes and fees</span>
            <button onClick={()=>navigate('/services/hotels/hotel')} className="siCheckButton">See availability</button>

        </div>
      </div>

    </div>
  )
  };
            
    
    export default SearchItem;
    