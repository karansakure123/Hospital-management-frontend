import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Corporate = () => {
  const [corporate, setCoporate] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCorporate = async () => {
      try {
        const response = await axios.get(
          "https://hospital-management-backend-3.onrender.com/api/v1/about/corporate/getall"
        ); // Replace with your API endpoint
        setCoporate(response.data.corporate);
      } catch (err) {
        console.error("Error fetching corporates:", err);
        toast.error("Failed to fetch corporates. Please try again later.");
      }
    };

    fetchCorporate();
  }, []);

  return (
    <>
      {corporate.length > 0 ? (
        corporate.map((corp, index) => (
          <div className="container-fluid " key={index}>
            <div className="row">
              <div className="col-12">
                <div className="corp-heading">
                  <h1>{corp.corpHeading}</h1>
                </div>
              </div>
              <div className="corp-detail p-4">
                <p>
                  {corp.corpDetail}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div>
                  <img
                    src= {corp.corpImg}
                    className="corp-img"
                    alt="Map"
                  />
                </div>
              </div>
            </div>
        
          </div>
        ))
      ) : (
        <p>corporate section not found</p>
      )}
    </>
  );
};

export default Corporate;

/*
<div className="corporate-container">
          <div className="row">
            <div className="col-12">
              <div className="corp-heading">
                <h1>Corporate Social Responsibility</h1>
              </div>
              <div className="corp-detail p-2">
                <p>Evolving from a joint replacement centre to a chain of multi-specialty hospitals, Shalby has always believed in giving back to society. We aspire to fulfil India’s rural healthcare needs and bring quality healthcare within reach of all people regardless of geographic location and economic status. At Shalby, we are always committed to delivering superior and sustainable value to all our customers, business partners, employees, and communities.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div>
                  <img src="https://www.shalby.org/wp-content/uploads/2024/07/mapImgDesktopFinal.png" className="acc-img" alt="Map" />
                </div>
              </div>
            </div>
          </div>
        </di
*/
