import React from 'react'
import "./propertyList.css"
import hotelImg1 from "../../../assets/images/hotelImg1.jpg"
import { Link } from 'react-router-dom'
const PropertyList = () => {
  return (
    <div className='pList'>
      <Link to="/hotel/list" className='list-link'>
        <div className="pListItem">
          <img src={hotelImg1} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotel/list" className='list-link'>
        <div className="pListItem">
          <img src={hotelImg1} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>534 hotels</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotel/list" className='list-link'>
        <div className="pListItem">
          <img src={hotelImg1} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>234 hotels</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotel/list" className='list-link'>
        <div className="pListItem">
          <img src={hotelImg1} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Villas</h1>
            <h2>212 hotels</h2>
          </div>
        </div>
      </Link>
      <Link to="/hotel/list" className='list-link'>
        <div className="pListItem">
          <img src={hotelImg1} alt="" className="PlistImg" />
          <div className="pListTitles">
            <h1>Cabins</h1>
            <h2>2122 hotels</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PropertyList