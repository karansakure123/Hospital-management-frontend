import React, { useContext, useState } from "react";
import "./style/signup.css"; // Import the custom CSS for Register component
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const navigateTo = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/patient/register",
        {firstName,lastName,phone, email,dob,nic,gender, password, role:"Patient"},
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/"); 
    } catch (error) {
      console.error(error);  
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };
  if(isAuthenticated){
    return <Navigate to="/"/>
  }

  return (

    <>
    <div className="register-sec">
   
    
     <div className="form-section ">
    <div className="register-form ">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
        
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
              autoComplete="new-email" // Changed to a unique value
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 mb-3">
            <label htmlFor="nic">NIC:</label>
            <input
              type="text"
              id="nic"
              name="nic"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="form-control"
              required
            />
          </div>
         
          <div className="col-md-6 mb-3">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-6 mb-3">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-control"
              required
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
              autoComplete="new-password" // Changed to 'new-password'
            />
          </div>
        </div>
        <button type="submit" className="btn-register">Register</button>
        <div className="signup-actions">
           <p className="signup-text">
            Already Registered? <Link to="/login" className="signup-link">Login Now</Link>
          </p>
        </div></form>
    </div>
  </div>
       
  </div>
    </>
   
  );
};

export default Register;
