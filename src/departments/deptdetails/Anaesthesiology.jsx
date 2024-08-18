import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/anasth.css";

const Anaesth = () => {
  const [anaesthData, setAnaesthData] = useState([]);
  const [expCardsData, setExpCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch anaesthesiology data
    const fetchAnaesthData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/anaesthesio/getall"
        );
        setAnaesthData(response.data);
      } catch (error) {
        console.error("Error fetching anaesthesiology data:", error);
      }
    };

    // Fetch doctors data
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/doctors?department=Anaesthesiology"
        );
        setExpCardsData(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchAnaesthData();
    fetchDoctors();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  return (
    <>
      {anaesthData.length > 0 && anaesthData.map((data, index) => (
        <div key={index}>
          {/* Section 1 */}
          <div className="ansth-sec1">
            <div className="bgimg">
              <div className="ansth-sec1-container">
                <div className="row">
                  <div className="col-12">
                    <img src={data.backgroundImage} alt="Background" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="ansth-sec2">
            <div className="container">
              <div className="row">
                <div className="anaesth-h">
                  <h1>Anaesthesia</h1>
                </div>
                <div className="col-md-6">
                  <div className="ansth-sec1-bgimg">
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
                        <p className="exp-card-text">Email: {doctor.email}</p>
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

export default Anaesth;
