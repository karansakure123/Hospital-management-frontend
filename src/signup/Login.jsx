import React, { useContext, useState } from 'react';
import './style/login.css';
import { Context } from '../main';
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios'; // Ensure axios is imported

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
      
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hospital-management-backend-3.onrender.com/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
    
  
    <br /><br />
    <div className="login-container">
      <div className="login-image">
        <div className="video-container">
          <video autoPlay muted loop className="video">
            <source src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/reception-at-the-hospital-9048310-7375184.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input 
            type="password" 
            id="confirm-password" 
            name="confirmPassword" 
            required 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
                    
          <div className="login-actions">
            <button className="login-btn">Login</button>
            <p className="signup-text">
              New User? <Link to="/register" className="signup-link">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
