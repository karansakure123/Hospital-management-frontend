import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import axios from 'axios';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(
        "https://hospital-management-backend-4.onrender.com/api/v1/user/patient/logout",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(false);
      setUser({});
      navigateTo('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
