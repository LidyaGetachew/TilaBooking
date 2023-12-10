import "./featured-hotels.css"
import React from "react"
import hotelImg1 from "../../../assets/images/hotelImg1.jpg"
import hotelImg2 from "../../../assets/images/hotelImg2.jpg"
import hotelImg3 from "../../../assets/images/hotelImg3.jpg"
const FeaturedHotels = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src={hotelImg1} />
            <div className="featuredTitles">
                <h2>Dublin</h2>
                <h3>123 properties</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src={hotelImg2} />
            <div className="featuredTitles">
                <h2>Austin</h2>
                <h3>532 properties</h3>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src={hotelImg3} />
            <div className="featuredTitles">
                <h2>Reno</h2>
                <h3>123 properties</h3>
            </div>
        </div>
    </div>
  )
}

export default FeaturedHotels