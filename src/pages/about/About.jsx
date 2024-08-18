import React, { useEffect, useState } from 'react';
import "../style/about.css";
 import axios from 'axios';
import { toast } from 'react-toastify';
import Accrediation from './Accrediation';
import Equipped from './Equipped';
import Directors from './Directors';
import Corporate from './Corporate';

const About = () => {
 
  return (
    <>
      {/* About section start */}
      <div className="aboutsec">
 
      <div className="aboutbgimg">
        <img src="https://www.shalby.org/wp-content/uploads/2024/06/42.jpg" alt="Background"  className='about-bgimg'/>
      </div>


      <section className='accreditation'>
        <Accrediation/>
      </section>



 

      <section className="about-sec2">
 
        <Directors/>
       </section>

      {/* About sec 3 */}
      <section className="about-sec3">
       <Equipped/>
      </section>

      <div className="about-sec4">
        <Corporate/>
      </div>
         
      </div>
      {/* About section end */}
    </>
  );
};

export default About;
