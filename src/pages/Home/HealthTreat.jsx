import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/health.css'; // CSS styling
import * as Icons from 'react-icons/fa'; // FontAwesome icons

const HealthSection = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    const fetchHealthData = async () => {
      try {
         const response = await axios.get('https://hospital-management-backend-4.onrender.com/api/v1/health/getall');
        console.log('Fetched health data:', response.data);

        if (Array.isArray(response.data)) {
          setHealthData(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          setHealthData([]);
        }
      } catch (error) {
        console.error('Error fetching health data:', error);
        if (error.response) {
          console.error('Error response data:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };

    fetchHealthData();
  }, []);

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    if (IconComponent) {
      return <IconComponent className="service-icon" />;
    } else {
      console.error(`Icon not found: ${iconName}`);
      return null;
    }
  };

  return (
    <section className="health-section">
      <div className="welcome-container">
        <h1 className="welcome-heading">Welcome to Our Health Care Center</h1>
        <p className="welcome-subheading">Your health is our priority. Together, we can achieve your wellness goals.</p>
      </div>
      <div className="services-container">
        {healthData.length === 0 ? (
          <p>No health data available</p>
        ) : (
          healthData.map((service) => (
            <div className="service" key={service._id}>
              {renderIcon(service.icon)}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default HealthSection;
