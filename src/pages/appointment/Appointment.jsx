import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to import axios for making requests
import { toast } from 'react-toastify'; // Import toast for notifications
import './apointment.css'; // Corrected the CSS import name

const Appointment = () => { 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [department, setDepartment] = useState('');
  const [doctorFirstName, setDoctorFirstName] = useState('');
  const [doctorLastName, setDoctorLastName] = useState('');
  const [hasVisited, setHasVisited] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

const deptArray =[ 
  "Anaesthesiology",
  "Cardiology",
  "Radiology",
  "Dermatology",
   "Psychiatry",
   "Orthopedic"
]

  const [doctors, setDoctors] = useState([]);



  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("https://hospital-management-backend-3.onrender.com/api/v1/user/doctors", { withCredentials: true });
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post(
        "https://hospital-management-backend-3.onrender.com/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited,
          address,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      // Clear the form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited("");
      setAddress("");
      setMessage("");
    } catch (error) {
      console.error(error.response.data);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <div className="appointment-sec">
        <div className="appointment-container mt-5">
          <h2 className="appointment-heading text-center mb-4">Request an Appointment</h2>
          <form className="appointment-form" onSubmit={handleSubmit}>
  <div className="row mb-3">
    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
      <label htmlFor="firstName" className="appointment-label">First Name</label>
      <input
        type="text"
        className="appointment-input"
        id="firstName"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-12 col-lg-6">
      <label htmlFor="lastName" className="appointment-label">Last Name</label>
      <input
        type="text"
        className="appointment-input"
        id="lastName"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  </div>
  
  <div className="row mb-3">
    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
      <label htmlFor="email" className="appointment-label">Email</label>
      <input
        type="email"
        className="appointment-input"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="col-12 col-lg-6">
      <label htmlFor="phone" className="appointment-label">Phone</label>
      <input
        type="tel"
        className="appointment-input"
        id="phone"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
      <label htmlFor="nic" className="appointment-label">NIC</label>
      <input
        type="text"
        className="appointment-input"
        id="nic"
        required
        value={nic}
        onChange={(e) => setNic(e.target.value)}
      />
    </div>
    <div className="col-12 col-lg-6">
      <label htmlFor="dob" className="appointment-label">Date of Birth</label>
      <input
        type="date"
        className="appointment-input"
        id="dob"
        required
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
      <label htmlFor="gender" className="appointment-label">Gender</label>
      <select
        id="gender"
        className="appointment-select"
        required
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">- Select -</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="col-12 col-lg-6">
      <label htmlFor="appointment_date" className="appointment-label">Appointment Date</label>
      <input
        type="date"
        className="appointment-input"
        id="appointment_date"
        required
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      />
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
      <label htmlFor="department" className="appointment-label">Speciality</label>
      <select
        id="department"
        className="appointment-select"
        value={department}
        onChange={(e) => {
          setDepartment(e.target.value);
          setDoctorFirstName("");
          setDoctorLastName("");
        }}
      >
        {deptArray.map((depart, index) => (
          <option value={depart} key={index}>
            {depart}
          </option>
        ))}
      </select>
    </div>
    <div className="col-12 col-lg-6">
      <label htmlFor="doctor" className="appointment-label">Doctors</label>
      <select
        id="doctor"
        className="appointment-select"
        value={`${doctorFirstName} ${doctorLastName}`}
        onChange={(e) => {
          const [firstName, lastName] = e.target.value.split(" ");
          setDoctorFirstName(firstName);
          setDoctorLastName(lastName);
        }}
        disabled={!department}
      >
        <option value="">Select Doctor</option>
        {doctors
          .filter((doctor) => doctor.doctorDepartment === department)
          .map((doctor, index) => (
            <option
              value={`${doctor.firstName} ${doctor.lastName}`}
              key={index}
            >
              {doctor.firstName} {doctor.lastName}
            </option>
          ))}
      </select>
    </div>
  </div>


  <div className="row mb-3">
    <div className="col-12">
      <label htmlFor="address" className="appointment-label">Address</label>
      <textarea
        className="appointment-input"
        id="address"
        rows="3"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
    </div>
  </div>
  <div className="form-check mb-3">
  <input
    type="checkbox"
    className="form-check-input"
    checked={hasVisited}
    id="hasVisited"
    required
    onChange={(e) => setHasVisited(e.target.checked)}
  />
  <label className="form-check-label" htmlFor="hasVisited">
    Have you visited before?
  </label>
</div>
<div className="form-check mb-3">
  <input
    type="checkbox"
    className="form-check-input"
    id="privacyPolicy"
    required
  />
  <label className="form-check-label" htmlFor="privacyPolicy">
    I agree to the privacy policy of Aster DM Healthcare
  </label>
</div>


  <button type="submit" className="appointment-btn">Submit</button>
</form>
        </div>
      </div>
    </>
  );
};

export default Appointment;
