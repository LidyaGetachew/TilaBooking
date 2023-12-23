import React from 'react'
import heroImage from "../../assets/images/travel-about-us-hero.png"
const Hero = () => {
  return (
    <div>
        <section className="hero-section"> 
         <div className="hero-content">
            <div className="about-us-title">ABOUT US</div>
            <p className="hero-subtitle">Transforming the way you experience travel</p>
            <p className="about-us-description">
                We are a leading tour and hotel booking platform committed to providing unparalleled travel experiences.
                With our user-friendly platform, you can effortlessly explore a vast selection of top-rated hotels and
                handpicked tours. Our dedicated team of travel experts is available 24/7 to assist you in creating 
                personalized itineraries and ensuring a seamless booking process. Whether you're planning a relaxing
                getaway, an adventurous expedition, or a business trip, we prioritize your satisfaction and strive to
                exceed your expectations. Experience the world with us and embark on a journey like no other.
            </p>
         </div>
        <div className="hero-image">
            <img src={heroImage} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Hero