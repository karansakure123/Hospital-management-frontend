import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style/all_doct.css";
import { toast } from 'react-toastify';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data } = await axios.get(
                    "https://hospital-management-backend-4.onrender.com/api/v1/user/doctors",
                    { withCredentials: true }
                );
                setDoctors(data.doctors);
            } catch (error) {
                const errorMessage = error.response?.data?.message || 'An error occurred while fetching doctors.';
                toast.error(errorMessage);
            }
        };
        fetchDoctors();
    }, []);

    return (
        <div className="container-fluid alldoct-container">
            <h1 className="alldoct-heading">Our Panel of Doctors</h1>
            <div className="row alldoct-row">
                {doctors && doctors.length > 0 ? (
                    doctors.map((element) => (
                        <div className="col-12 col-md-6 alldoct-col" key={element.id}>
                            <div className="alldoct-card">
                                <img
                                    src={element.docAvatar && element.docAvatar.url}
                                    alt="Doctor Avatar"
                                    className="alldoct-img"
                                />
                                <div className="alldoct-card-body">
                                    <h4 className="doctor-name">{`${element.firstName} ${element.lastName}`}</h4>
                                    <div className="alldoct-details">
                                        <p>Email: <span>{element.email}</span></p>
                                        <p>Phone: <span>{element.phone}</span></p>
                                        <p>DOB: <span>{element.dob.substring(0, 10)}</span></p>
                                        <p>Department: <span>{element.doctorDepartment}</span></p>
                                        <p>NIC: <span>{element.nic}</span></p>
                                        <p>Gender: <span>{element.gender}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="col-12">No Registered Doctors Found!</h1>
                )}
            </div>
        </div>
    );
}

export default Doctors;
