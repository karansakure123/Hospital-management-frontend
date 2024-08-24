import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Equipped = () => {
  const [equipped, setEquipped] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipped = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-4.onrender.com/api/v1/about/equipped/getall'); // Replace with your API endpoint
        setEquipped(response.data.equipped);
      } catch (err) {
        console.error("Error fetching equipped section :", err);
        toast.error("Failed to fetch equipped section. Please try again later.");
      }
    };

    fetchEquipped();
  }, []);

  return (
    <>
      <div className="container">
        <div className="about-sec3-heading">
          <h2>Our hospital is equipped with an array of facilities for you such as</h2>
        </div>
        <div className="row">
          {equipped.length > 0 ? (
            equipped.map((eqp, index) => (
              <div className="col-md-3" key={index}>
                <div className="about-sec3-card">
                  <div className="sec3-card-img">
                    <img src={eqp.eqpImg} alt="" />
                  </div>
                  <div className="sec3-card-title">
                    <h6>{eqp.eqpTitle}</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No equipped section found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Equipped;
