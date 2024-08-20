import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/global.css";

const IntPatient = () => {
  const [csrData, setCsrData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    axios.get('https://hospital-management-backend-3.onrender.com/api/v1/csr/getall')
      .then(response => {
        setCsrData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the CSR data!', error);
      });
  }, []);

  return (
    <>
      <div className="custom-slider-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {csrData.map((item, index) => (
              <div key={item._id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="hsec5-card row">
                  <div className="sec5himg col-lg-6 col-md-6 col-12">
                    <img src={item.img} alt={`Card ${index + 1}`} />
                  </div>
                  <div className="hsec5-text col-lg-6 col-md-6 col-12">
                    <h1>{item.heading || 'Default Heading'}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev custom-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="custom-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next custom-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="custom-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default IntPatient;
