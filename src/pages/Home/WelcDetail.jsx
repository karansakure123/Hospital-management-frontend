import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../style/welc.css";

const WelcDetail = () => {
  // Initialize wecData as an empty array
  const [wecData, setWecData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch data using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-3.onrender.com/api/v1/intro/get'); // Your actual endpoint
        console.log("API Response:", response.data); // Log the response for debugging

        // Check if the response contains the intros array and set state
        if (response.data.success && Array.isArray(response.data.intros)) {
          setWecData(response.data.intros);
        } else {
          console.error("Data received is not in the expected format", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="wel-sec p-2">
      <div className="container-fluid">
        {wecData.length > 0 ? (
          wecData.map((item) => (
            <div key={item._id} className="row mb-4">
              <div className="sec1-main-heading">
                <h1>{item.Heading}</h1>
              </div>
              <div className="col-md-6">
                <div className="welc-card">
                  <div className="welc-title">
                    <h1>{item.title}</h1>
                    <h5>{item.description}</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="welc-img">
                  <img src={item.imageUrl} alt={item.title} className="img-fluid welc-img" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data available.</div> // Handle case with no data
        )}
      </div>
    </div>
  );
}

export default WelcDetail;
