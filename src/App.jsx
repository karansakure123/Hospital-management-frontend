import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import "./App.css"
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Appointment from './pages/appointment/Appointment';
import Login from './signup/Login';
import Register from './signup/Register';
import Contact from './contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Department from './departments/Department';
import Cardiology from './departments/deptdetails/Cardiology';
import Anaesthesiology from './departments/deptdetails/Anaesthesiology';
import Orthopedic from './departments/deptdetails/Orthopedic';
 import Doctors from './doctors/Doctors';

const App = () => {
 
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
          <Route path="/department/cardiology" element={<Cardiology />} />
          <Route path="/department/anaesthesiology" element={<Anaesthesiology />} />
          <Route path="/department/orthopedics" element={<Orthopedic />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
