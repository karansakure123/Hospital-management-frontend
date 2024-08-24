import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useSpring, animated } from "@react-spring/web";
import "../style/whowe.css";

const WhoWeAre = () => {
  const [whoWeAreSections, setWhoWeAreSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hospital-management-backend-4.onrender.com/api/v1/whowe/getall");
        if (response.data.success && Array.isArray(response.data.whoWeAreSections)) {
          setWhoWeAreSections(response.data.whoWeAreSections);
        } else {
          toast.error("Unexpected response structure from the API.");
        }
      } catch (error) {
        toast.error("Failed to fetch 'Who We Are' sections. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  return (
    <>
      <Toaster position="top-center" />
      <div className="home-sec2">
  <div className="custom-container">
    <div className="row">
      <div className="col-12">
        {whoWeAreSections.map((section) => (
          <animated.div
            key={section._id}
            className="home-sec2-card"
            style={fadeIn}
          >
            <div className="card-title">
              <h1 className="sec2-heading">{section.sectionTitle}</h1>
            </div>
            <div className="card-text sec2-p">
              <p>{section.para1}</p>
              {section.para2 && <p>{section.para2}</p>}
              {section.para3 && <p>{section.para3}</p>}
            </div>
            <div className="more-btn">
              <button className="more-btns">{section.buttonLabel}</button>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  </div>
 

        {/* First SVG */}
        <svg className="home-sec2-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(76, 175, 80, 0.7)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 150, 136, 0.7)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" d="M0,128L40,144C80,160,160,192,240,197.3C320,203,400,181,480,165.3C560,149,640,139,720,128C800,117,880,107,960,128C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>

        {/* Second SVG with Points */}
        <svg className="home-sec2-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(0, 188, 212, 0.7)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(76, 175, 80, 0.7)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#grad2)" d="M0,256L40,240C80,224,160,192,240,186.7C320,181,400,203,480,197.3C560,192,640,160,720,128C800,96,880,64,960,64C1040,64,1120,96,1200,101.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          <circle cx="150" cy="200" r="15" fill="rgba(255, 255, 255, 0.5)" className="svg-dot" />
          <circle cx="300" cy="150" r="10" fill="rgba(255, 255, 255, 0.3)" className="svg-dot" />
          <circle cx="600" cy="250" r="12" fill="rgba(255, 255, 255, 0.4)" className="svg-dot" />
          <circle cx="800" cy="100" r="20" fill="rgba(255, 255, 255, 0.6)" className="svg-dot" />
          <circle cx="1000" cy="180" r="10" fill="rgba(255, 255, 255, 0.3)" className="svg-dot" />
          <circle cx="1200" cy="230" r="15" fill="rgba(255, 255, 255, 0.5)" className="svg-dot" />
        </svg>
      </div>
    </>
  );
};

export default WhoWeAre;
