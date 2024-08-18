import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/health.css'; // Import the CSS file for styling
import * as Icons from 'react-icons/fa'; // Import all FontAwesome icons

const HealthSection = () => {
  const [healthData, setHealthData] = useState([]);

  // Fetch health data from the backend on component mount
  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/health/getall');
        setHealthData(response.data); // Assuming the data is returned in the response body
      } catch (error) {
        console.error('Error fetching health data:', error);
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
