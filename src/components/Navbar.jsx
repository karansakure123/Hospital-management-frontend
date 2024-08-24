import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style/navbar.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import Spinner from '../pages/Home/Home'; // Ensure this path is correct

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [navigationItems, setNavigationItems] = useState([]);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const fetchNavigationItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://hospital-management-backend-4.onrender.com/api/v1/navbar/getall");
                console.log("Fetched navbar data:", response.data);
                
                if (response.data.success && response.data.navbar.length > 0) {
                    const allNavItems = response.data.navbar.reduce((acc, navbarItem) => {
                        return acc.concat(navbarItem.navItems);
                    }, []);
                    
                    console.log("Aggregated nav items:", allNavItems);
                    setNavigationItems(allNavItems);
                } else {
                    toast.warning("No navigation items found.");
                }
            } catch (error) {
                console.error("Error fetching navigation items:", error);
                toast.error("Error fetching navigation items");
            } finally {
                setLoading(false);
            }
        };

        fetchNavigationItems();

        // Add event listener to close sidebar on outside click
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [sidebarOpen]);

    const handleNavLinkClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate loading effect
    };

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev); // Toggle sidebar state
    };

    if (loading) {
        return <Spinner />; // Show loading spinner while fetching
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand" to="/">
                    <img src="https://renovahospitals.com/images/Renova-Logo.png" alt="Hospital Logo" className='nav-logo' />
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`navbar-collapse ${sidebarOpen ? 'show' : ''}`} ref={sidebarRef}>
                    {sidebarOpen && (
                        <div className="video-background">
                            <video autoPlay loop muted className="background-video">
                                <source src="https://static.videezy.com/system/resources/previews/000/007/024/original/timelapse_clouds.mp4" type="video/mp4" />
                            </video>
                        </div>
                    )}
                    <ul className="navbar-nav ml-auto">
                        {navigationItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link className="nav-link" to={item.path} onClick={handleNavLinkClick}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
