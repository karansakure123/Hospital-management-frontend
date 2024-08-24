import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web';
 
const Patientspeak = () => {
  const [patientSpeaks, setPatientSpeaks] = useState([]);

  useEffect(() => {
    const fetchPatientSpeaks = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-4.onrender.com/api/v1/patientspeak/getall'); // Adjust URL as needed
        setPatientSpeaks(response.data);
      } catch (error) {
        console.error('Error fetching patient speaks:', error);
      }
    };

    fetchPatientSpeaks();
  }, []);

  // Background animation properties
  const animationProps = useSpring({
    from: { opacity: 0.5, transform: 'translateY(-10%)' },
    to: [
      { opacity: 0.8, transform: 'translateY(0%)' },
      { opacity: 0.5, transform: 'translateY(-10%)' }
    ],
    config: { duration: 15000 },
    reset: true,
    loop: true
  });

  return (
    <div className="sec7-pspeak">
      <animated.div
        style={{
          ...animationProps,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 20%, rgba(0, 150, 136, 0.5), rgba(0, 150, 136, 0.3))',
          zIndex: -1
        }}
      ></animated.div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1 className="pspeak-heading">Patient Speaks</h1>
          </div>
          {patientSpeaks.map((speak) => (
            <div className="col-md-4" key={speak._id}>
              <div className="sec7-card">
                <div className="sec7-video">
                  <iframe
                    src={speak.videoUrl}
                    title={speak.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="card-text-sec7">
                    <h5>{speak.text}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patientspeak;
