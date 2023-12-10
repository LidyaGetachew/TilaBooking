import React from 'react'
import "./propertyList.css"
import hotelImg1 from "../../../assets/images/hotelImg1.jpg"
const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={hotelImg1} alt="" className="PlistImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={hotelImg1} alt="" className="PlistImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>534 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={hotelImg1} alt="" className="PlistImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>234 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={hotelImg1} alt="" className="PlistImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>212 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={hotelImg1} alt="" className="PlistImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>2122 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList