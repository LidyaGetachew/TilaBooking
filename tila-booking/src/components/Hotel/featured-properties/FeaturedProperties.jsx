import React from 'react'
import "./FeaturedProperties.css"
import hotelImg from "../../../assets/images/hotelImg2.jpg"
import { Link } from 'react-router-dom'
const FeaturedProperties = () => {
  return (
    <div className='fp'>
    <Link to="/services/hotels/hotel" className="list-link">
      <div className="fpItem">
        <img src={hotelImg} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </Link>
    <Link to="/services/hotels/hotel" className="list-link">
      <div className="fpItem">
        <img src={hotelImg} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </Link>
    <Link to="/services/hotels/hotel" className="list-link">
      <div className="fpItem">
        <img src={hotelImg} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </Link>
    <Link to="/services/hotels/hotel" className="list-link">
      <div className="fpItem">
        <img src={hotelImg} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </Link>
    <Link to="/services/hotels/hotel" className="list-link">
      <div className="fpItem">
        <img src={hotelImg} alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default FeaturedProperties