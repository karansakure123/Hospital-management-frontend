import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Directors = () => {
  const [director, setDirector] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDirectors = async () => {
        try {
          const response = await axios.get('https://hospital-management-backend-4.onrender.com/api/v1/about/director/getall'); // API endpoint
          console.log("API Response:", response.data); // Log the entire API response
      
          // Check if the data structure is as expected
          if (response.data.success && Array.isArray(response.data.director)) {
            console.log("Directors fetched:", response.data.director); // Log the director array
            setDirector(response.data.director);
          } else {
            console.warn("Unexpected response structure:", response.data); // Log a warning if the structure is not as expected
            toast.error("Unexpected response structure from the API.");
          }
        } catch (err) {
          console.error("Error fetching directors:", err); // Log the error
          toast.error("Failed to fetch directors. Please try again later.");
          setError(err);
        }
      };
      

    fetchDirectors();
  }, []);

  return (
    <div className="container">
  <div className="row sec2-aboutcontainer"> {/* Added .row class here */}
  <h2 className="board-director">Board of Directors</h2>

    {director && director.length > 0 ? (
      director.map((dirc, index) => (
        <div className="col-md-4" key={index}> {/* Key is placed correctly here */}
          <div className="about-sec2-card">
            <div className="sec2-card-img">
              <img src={dirc.dircImg} className="about-sec2-img" alt="" />
            </div>
            <div className="sec2-card-title">
              <h6>{dirc.dircHeading}</h6>
              <p>{dirc.dircSpeciality}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No director section found</p>
    )}
  </div>
</div>

  );
};

export default Directors;



  /*


  <div className="container">
  <div className="container sec2-aboutcontainer">
          <div className="about-sec2-heading">
            <h2>BOARD OF DIRECTORS</h2>
          </div>
          <div className="row">
            {boardData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="about-sec2-card">
                  <div className="sec2-card-img">
                    <img src={item.img} alt={item.heading} className="about-sec2-img" />
                  </div>
                  <div className="sec2-card-title">
                    <h6>{item.heading}</h6>
                    <p>{item.speciality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  </div>

  */