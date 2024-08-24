import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/hero.css";

const Allslider = () => {
  const [heroSections, setHeroSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroSections = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-4.onrender.com/api/v1/hero/getall');
        setHeroSections(response.data.heroes || []);
      } catch (error) {
        setError('Error fetching hero sections');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroSections();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.getElementById('heroSlider');
      if (carousel) {
        const bootstrapCarousel = new window.bootstrap.Carousel(carousel);
        bootstrapCarousel.next();
      }
    }, 4500); // 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [heroSections]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className="hero-slider-section">
    
      <div id="heroSlider" className="carousel slide hero-slider" data-bs-ride="carousel">
        <div className="carousel-inner">
          {heroSections.map((hero, index) => (
            <div key={hero._id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={hero.sliderImg} className="d-block w-100 hero-slider-img" alt={`Slide ${index + 1}`} />
            
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default Allslider;
