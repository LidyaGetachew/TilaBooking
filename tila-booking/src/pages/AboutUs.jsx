import React from 'react';
import Hero from '../components/AboutUs/Hero';
import "../components/AboutUs/aboutUs.css"
import missionImage from "../assets/images/mission.png"
import visionImage from "../assets/images/vision.png"
import valuesImage from "../assets/images/values.png"
import MissionVisionValuesCard from '../components/AboutUs/MissionVisionValuesCard';
import Team from '../components/AboutUs/Team';
const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <section>
        <Hero />
      </section>
      <section>
        <div className='mission-vision-container'>
        <MissionVisionValuesCard
          icon={<img src={missionImage} alt='misionImage' />}
          title="MISSION"
          statement="Our mission is to provide unforgettable travel experiences by offering exceptional tours and hotel accommodations. We strive to exceed our customers' expectations and create lifelong memories."
        />
        <MissionVisionValuesCard
          icon={<img src={visionImage} alt='misionImage' />}
          title="VISION"
          statement="Our vision is to become the leading platform for seamless travel booking, empowering travelers to explore the world with ease and confidence."
        />
        <MissionVisionValuesCard
          icon={<img src={valuesImage} alt='misionImage' />}
          title="VALUES"
          statement="Our core values include customer satisfaction, integrity, innovation, and responsibility. We are committed to delivering exceptional service and fostering meaningful relationships with our customers and partners."
        />
       </div>
      </section>

      <section>
        <Team/>
      </section>

      <section>
        <div>
          <h2>Testimonials</h2>
          {/* Testimonials component */}
        </div>
      </section>

      <section>
        <div>
          <h2>Our Services</h2>
          {/* Services component */}
        </div>
      </section>

      <section>
        <div>
          <h2>Our Brand Story</h2>
          {/* Brand Story component */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;