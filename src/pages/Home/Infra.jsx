import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/infra.css";


const InfraSection = () => {
  const [infrastructure, setInfrastructure] = useState(null);

  useEffect(() => {
    const fetchInfrastructure = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-3.onrender.com/api/v1/infra/getall'); // Backend API endpoint
        setInfrastructure(response.data.infrastructures[0]); // Assuming you're getting an array and taking the first item
      } catch (error) {
        console.error("Error fetching infrastructure:", error);
      }
    };

    fetchInfrastructure();
  }, []);

  return (
    <div className="infra">
      <div className="container-fluid">
        <div className="row">
          <div className="our-infra-heading">
            <h1>{infrastructure ? infrastructure.heading : 'Loading...'}</h1>
          </div>
          {infrastructure && (
            <>
              <div className="col-md-6 d-flex align-items-center">
                <img
                  src={infrastructure.leftImage}
                  alt="Hospital Image 1"
                  className="img-left"
                />
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-2">
                    <img
                      src={infrastructure.images[0]}
                      alt="Hospital Image 2"
                      className="img-mid"
                    />
                  </div>
                  <div className="col-12">
                    <img
                      src={infrastructure.images[1]}
                      alt="Hospital Image 3"
                      className="img-mid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-2">
                    <img
                      src={infrastructure.images[2]}
                      alt="Hospital Image 4"
                      className="img-right"
                    />
                  </div>
                  <div className="col-12">
                    <img
                      src={infrastructure.images[3]}
                      alt="Hospital Image 5"
                      className="img-right"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfraSection;
