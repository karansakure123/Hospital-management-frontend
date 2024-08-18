import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";
import "../style/blog.css";
import Blog from "./Blog";
import Patientspeak from "./Patientspeak";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/testimonial/getall");
        setTestimonials(response.data);
      } catch (error) {
        setError("Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {/* Testimonial Section */}
      <div className="testimonial-sec6">
      <div className="shape-primary shape-one"></div>
      <div className="shape-primary shape-two"></div>
      <div className="shape-primary shape-three"></div>
      <div className="shape-primary shape-four"></div>

      {/* Adding particles */}
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 3}s`
          }}
        ></div>
      ))}

      <div className="container">
        <div id="testimonialCarousel" className="carousel slide">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial._id} // Use unique ID
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="testimonial-item"
                  style={{
                    backgroundImage: `url(${testimonial.imageUrl})`, // Use the imageUrl from the data
                  }}
                >
                  <div className="test-card">
                    <div className="testimonial-title">Testimonials</div>
                    <div className="testimonial-text">
                      <p>
                        <FaQuoteLeft /> {testimonial.message}
                      </p>
                      <p>{testimonial.name}</p> {/* Display the name */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev testimonial-prev-btn"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true">
              <i className="fas fa-chevron-left"></i>  
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next testimonial-next-btn"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true">
              <i className="fas fa-chevron-right"></i>  
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

      <Patientspeak />
      <Blog />
    </>
  );
};

export default Testimonial;
