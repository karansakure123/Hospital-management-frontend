import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/health.css'; // Import the CSS file for styling
import * as Icons from 'react-icons/fa'; // Import all FontAwesome icons

const HealthSection = () => {
  const [healthData, setHealthData] = useState([]);

   useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-3.onrender.com/api/v1/health/getall');
        setHealthData(response.data);  
      } catch (error) {
        if (error.response) {
           console.error('Error fetching health data:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
           console.error('Error with request:', error.request);
        } else {
          // Something else caused the error
          console.error('Error', error.message);
        }
      }
    };
  
    fetchHealthData();
  }, []);
  
  // Function to dynamically render icons
  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="service-icon" /> : null;
  };

  return (
    <section className="health-section">
      <div className="welcome-container">
        <h1 className="welcome-heading">Welcome to Our Health Care Center</h1>
        <p className="welcome-subheading">Your health is our priority. Together, we can achieve your wellness goals.</p>
      </div>
      <div className="services-container">
        {healthData.map((service) => (
          <div className="service" key={service._id}>
            {renderIcon(service.icon)}
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthSection;
