import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import WelcDetail from "./WelcDetail";
import WhoWeAre from './WhoWeAre';
import Awards from './Awards';
import IntPatient from './IntPatient';
import Testimonial from './Testimonial';
import HealthTreat from './HealthTreat';
import WhatsAppButton from './Whatsappbtn';
import "../style/home.css"
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <svg className="spinner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path className="spinner-path" d="M10 50 Q30 10 50 50 T90 50" />
            <circle className="spinner-dot" cx="50" cy="50" r="5" />
          </svg>
          <div className="spinner-text">Renovo...</div>
        </div>
      ) : (
        <>
          <Hero />
          <WelcDetail />
          <WhoWeAre />
          <Awards />
          <IntPatient />
          <Testimonial />
          <HealthTreat />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

export default Home;
