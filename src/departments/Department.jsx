import React, { useEffect, useState } from "react";
import "./style/department.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Department = () => {
  const navigate = useNavigate();
  const [deptData, setDeptData] = useState([]);
  const [toastShown, setToastShown] = useState(false); // Flag to track if toast is shown

  // Fetch department data
  const fetchDepartments = async () => {
    try {
      const response = await axios.get("https://hospital-management-backend-4.onrender.com/api/v1/departments/getall");
      setDeptData(response.data.departments); // Adjust based on your API response structure
      if (!toastShown) {
         setToastShown(true); // Set flag to true after showing the toast
      }
    } catch (error) {
      toast.error("Failed to fetch departments!");
      console.error("Error fetching departments:", error);
    }
  };

  // Fetch departments on component mount
  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <div>
 

      <div className="dept-sec2">
      <div class="dept-shape dept-shape-1"></div>
  <div class="dept-shape dept-shape-2"></div>
  <div class="dept-shape dept-shape-3"></div>
  <div class="dept-shape dept-shape-4"></div>
  <div class="dept-shape dept-shape-5"></div>
  <div class="dept-shape dept-shape-6"></div>
         <div className="dept-title">
          <h1>Centre of Excellence</h1>
        </div>
        <div className="row">
          {deptData.length > 0 ? (
            deptData.map((item) => (
              <div className="col-md-4 mb-4" key={item._id}>
                <div className="dept-card">
                  <img
                    src={item.deptImage}
                    className="dept-sec1-imgs"
                    alt={item.deptName}
                  />
                  <div className="dept-card-body">
                    <h5 className="dept-card-title">{item.deptName}</h5>
                    <button
                      className="dept-readmore"
                      onClick={() => handleReadMore(`/department/${item.deptName.toLowerCase()}`)}
                    >
                      Read More <FaArrowRight size={22} color="white" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No departments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Department;
