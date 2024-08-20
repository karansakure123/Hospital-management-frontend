import React, { useEffect, useState } from 'react';
import './style/footer.css';

const Footer = () => {
  const [links, setLinks] = useState([]);
  const apiUrl = 'https://hospital-management-backend-4.onrender.com/api/v1/footer/getall'; // Replace with your actual API URL

  // Fetch links data from API
  const fetchLinks = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setLinks(data);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <>
      <footer className="footer pt-4">
        <video className="video-background" autoPlay loop muted>
          <source src="https://static.videezy.com/system/resources/previews/000/038/685/original/alb_ekg002_1080p_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container footer-content">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {links.map((link) => (
              <div className="col" key={link.id}>
                <h5 className="footer-headings">{link.title}</h5>
                <ul className="list-unstyled">
                  {link.items.map((item) => (
                    <li key={item.id}>
                      <a href={item.url} className="text-white footer-lists">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
   <div className="footer-container">
  <div className="footer-logo-container text-center">
    <img src="https://renovahospitals.com/images/Renova-Logo.png" alt="Hospital Logo" className="footer-logo" />
  </div>
  <div className="footer-address-container text-center">
    <p className="footer-address">
      Renovo Hospitals<br />
      Anand Dham Road, Ahmednagar<br />
      Pincode - 414501
    </p>
  </div>
</div>

          </div>
        </div>
      </footer>
      <div className="footer-end">
        <div className="col text-center pt-4">
          <p>© 2024 Renova HOSPITAL. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
