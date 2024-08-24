import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/ortho.css";

const Orthopedic = () => {
  const [orthoData, setOrthoData] = useState([]);
  const [expCardsData, setExpCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrthoData = async () => {
      try {
        const response = await axios.get(
          "https://hospital-management-backend-4.onrender.com/api/v1/orthopedics/getall"
        );
        setOrthoData(response.data);
      } catch (error) {
        console.error("Error fetching orthopedic data:", error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://hospital-management-backend-4.onrender.com/api/v1/user/doctors?department=Orthopedics"
        );
        console.log(response.data.doctors); // Log the response to check the data structure
        setExpCardsData(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchOrthoData();
    fetchDoctors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {orthoData.length > 0 && orthoData.map((data, index) => (
        <div key={index}>
          {/* Section 1 */}
          <div className="ortho-sec1">
            <div className="bgimg">
              <div className="ortho-sec1-container">
                <div className="row">
                  <div className="col-12">
                    <img src={data.backgroundImage} alt="Background" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="ortho-sec2">
            <div className="container">
              <div className="row">
                <div className="ortho-h">
                  <h1>Orthopedics</h1>
                </div>
                <div className="col-md-6">
                  <div className="ortho-sec1-bgimg">
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
                        src={doctor.docAvatar || "default-avatar.png"}
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

export default Orthopedic;
