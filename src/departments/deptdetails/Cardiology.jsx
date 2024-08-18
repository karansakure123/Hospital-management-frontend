import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/cardio.css"; // Update the CSS file path if necessary

const Cardiology = () => {
  const [cardioData, setCardioData] = useState([]);
  const [expCardsData, setExpCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cardiology data
    const fetchCardioData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/cardiology/getall" // Update the endpoint for cardiology
        );
        setCardioData(response.data);
      } catch (error) {
        console.error("Error fetching cardiology data:", error);
      }
    };

    // Fetch doctors data
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/doctors?department=Cardiology" // Update department to Cardiology
        );
        setExpCardsData(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchCardioData();
    fetchDoctors();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  return (
    <>
      {cardioData.length > 0 && cardioData.map((data, index) => (
        <div key={index}>
          {/* Section 1 */}
          <div className="cardio-sec1">
            <div className="bgimg">
              <div className="cardio-sec1-container">
                <div className="row">
             
                  <div className="col-12">
                    <img src={data.backgroundImage} alt="Background" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="cardio-sec2">
            <div className="container">
              <div className="row">
              <div className="cardio-h">
                    <h1>Cardiology</h1>
                  </div>
                <div className="col-md-6">
                  
                  <div className="cardio-sec1-bgimg">
                    
                    <img
                      src={data.innerImage}
                      alt="Inner"
                      className="bg-img"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-content">
                    <h5 className="text-primary">{data.title}</h5>
                    <br />
                    <p>{data.description}</p>
                    <p>
                      <strong>{data.additionalInfo}</strong>
                    </p>
                    <Link to="/appointment">
                      <button className="exp-btn">Make an Appointment</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="heading-div">
            <div className="exp-doc-h">Our Experts</div>
            <div className="container">
              <div className="row">
                {expCardsData.length > 0 && expCardsData.map((doctor, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="exp-card">
                      <img
                        src={doctor.docAvatar?.url || "default-avatar.png"} 
                        alt={`${doctor.firstName} ${doctor.lastName}`}
                        className="exp-card-img"
                      />
                      <div className="exp-card-body">
                        <p className="exp-card-title">
                          <strong>{`${doctor.firstName} ${doctor.lastName}`}</strong>
                        </p>
                        <p className="exp-card-text">Speciality: {doctor.speciality}</p>
                        <Link to="/appointment">
                          <button className="exp-btn">Read More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardiology;
