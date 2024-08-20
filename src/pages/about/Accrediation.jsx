import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Accreditation = () => {
  const [accreditation, setAccreditation] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccreditations = async () => {
      try {
        const response = await axios.get('https://hospital-management-backend-3.onrender.com/api/v1/about/accreditation/getall'); // Replace with your API endpoint
        setAccreditation(response.data.accreditations);
      } catch (err) {
        console.error("Error fetching accreditations:", err);
        toast.error("Failed to fetch accreditations. Please try again later.");
      }
    };

    fetchAccreditations();
  }, []);

  return (
    <>
      <div className="container acc-container p-0">
    
    <div className="row">
          <div className="col-md-12">
            <h1 className='acc-heading'>Accreditation</h1>
          </div>
          {accreditation.length > 0 ? (
            accreditation.map(acc => (
              <div key={acc._id} className="row mb-4">
                <div className="col-md-6 acc-p">
                  <h5 className="card-title-acc">{acc.accTitle}</h5>
                  <p className="card-text">{acc.accDesc1}</p>
                  <p className="card-text">{acc.accDesc2}</p>
                </div>
                <div className="col-md-6">
                  <img src={acc.accImg} className="img-fluid about-sec2-img" alt={acc.accTitle} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-12">
              <p>No accreditations found.</p>
            </div>
          )}
        </div>
      </div>

      <div className="about-values">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="https://www.shalby.org/wp-content/uploads/2023/05/Elite_ValueImg-1.png" className='valimg' alt="Values" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accreditation;
