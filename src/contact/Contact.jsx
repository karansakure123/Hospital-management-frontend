import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, phone, email, message }); // Log data before sending
    try {
      const response = await axios.post(
        "https://hospital-management-backend-4.onrender.com/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error.response.data);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
     <div className="bgimg">
  <div className="row">
    <div className="col-12">
      <img
        src="https://www.shalby.org/wp-content/uploads/2024/06/34.jpg"
        alt="Background"
        className="img-fluid"  
      />
    </div>
  </div>
</div>

      <div className="contact-sec p-0">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="form-section">
                <form onSubmit={handleSubmit} className="custom-form">
                  <div className="row">
                    <h2 className="contact-heading">Contact Us</h2>
                    <div className="col-md-6 form-group">
                      <label className="form-label contact-headings">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label contact-headings">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label className="form-label contact-headings">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label contact-headings">
                        Phone
                      </label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label contact-headings">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-sub-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-5">
            <div className="info-cards row">
                <div className="address-card col-12 custom-card p-3  mb-4">
                  <h4 className="address-heading">Address</h4>
                  <p>
                    <b>Renova Hospitals</b>
                  </p>
                  <p>Anand Dham Road, Ahmednagar</p>
                  <p>Pincode - 414501</p>
                </div>
              </div>
              <div className="mobilemail-cards row">
                <div className="col-md-6 col-lg-6">
                  <div className="email-card custom-card p-4 mb-4">
                    <h5 className="contact-info-heading">Email</h5>
                    <p>renovo@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="mobile-card custom-card p-4 mb-4">
                    <h5 className="contact-info-heading">Mobile</h5>
                    <p>9898959599</p>
                  </div>
                </div>
              </div>
              <div className="map-card p-4 mb-4">
                <iframe
                  className="gmap"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120638.0682341495!2d74.66027089406525!3d19.110304069582877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721564508803!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
