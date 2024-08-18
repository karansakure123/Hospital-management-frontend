import React from "react";
import { Link } from "react-router-dom";
import "./style/dermato.css";
const Dermatology = () => {
  const expCardsData = [
    {
      imgSrc:
        "https://www.manipalhospitals.com/uploads/doctors_photo/dr-a-aruna-prasad-consultant-dermatologist-and-Cosmetologist.png",
      title: "Dr. Vivek Mishra",
      text: "Department: Consultant Dermatologist",
      text2:
        "Experise: Hair Transplant Surgery Professional Diploma In Clinical Research",
    },
    {
      imgSrc:
        "https://www.manipalhospitals.com/uploads/doctors_photo/dr-p-s-murthy-senior-consultant-dermatology.png",
      title: "Dr. Roshni Upadhyay",
      text: "Department: Consultant Dermatologist",
      text2:
        "Expertise :  DNB (Derm, Ven &Amp; Lep), MRCP, SCE UK (Dermatology)",
    },
  ];

  return (
    <>
      <div className="dermato-sec1">
        <div className="bgimg">
          <div className="dermato-sec1-container">
            <div className="row">
              <div className="col-12">
                <img
                  src="https://bhaktiadmin.bhaktivedantahospital.com/public/upload//banner/16684010087629.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dermato-sec2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="dermato-sec1-bgimg">
                <img
                  src="https://pandithospital.co.in/wp-content/uploads/2022/09/Pandit-Hospital-Website-BCKG.png"
                  alt=""
                  className="bg-img"
                />
                <div className="inner-cadio-img">
                  <img
                    src="https://bharatihospital.com/wp-content/uploads/2021/10/Anesthesia-21.jpg.webp"
                    alt=""
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-content">
                <h5 className="text-primary">Dermatology</h5>
                <br />
                <p>
                  Looking for a renowned dermatologist in Mumbai? Look no
                  further! Visit AllCure Hospital for all your dermatological
                  needs.
                </p>
                <p>
                  With years of experience and extensive knowledge, our
                  dermatologists have gained a reputation for delivering
                  exceptional results.
                </p>
                <p>
                  Our experienced dermatologist in Mumbai specialises in
                  addressing a wide range of skin concerns. Whether you require
                  the expertise of a skin and hair specialist in Mumbai, our
                  skilled team will provide you with comprehensive and
                  personalised treatment options. With our advanced techniques
                  and state-of-the-art equipment, we provide top-notch
                  treatments for various dermatological conditions. Schedule an
                  appointment with our dermatologist to receive care and
                  effective solutions tailored to your specific needs.
                </p>
                <p>
                  <strong>
                  Treatments & Procedure

                  </strong>
                  
                  <p>Our department has access to a wide variety of cutting-edge technology and equipment, allowing us to provide you with top-notch service and surgical precision. Some of the treatments we offer are:</p>
                </p>
                <p>
                Cryoslush
                Cryosurgery
                Dermabrasion
                </p>
               
              </div>
              
            </div>

            <strong className="strongtxt">Our Doctor Make Sure To:</strong>
                <p>
              
                 To give the right advice and guidance to patients with STDs. We have STDs specialists as well.
                   To ascertain the post-treatment consultation.
                   <br />To use the latest treatment methods and advanced equipment to take care of patients of all age groups.

</p>
                <button className="app-btn">Make an Appointment</button>          </div>
        </div>
      </div>

      <div className="heading-div">
        <div className="exp-doc-h">Our Experts</div>
      </div>
      <div className="container">
        <div className="row">
          {expCardsData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="exp-card">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="exp-card-img"
                />
                <div className="exp-card-body">
                  <div className="text-content">
                    <p className="exp-card-title">
                      <strong>{card.title}</strong>
                    </p>
                    <p className="exp-card-text">{card.text}</p>
                  </div>
                  <Link to="/appointment">
                    <div className="exp-btn-container">
                      <button className="exp-btn">Read More</button>
                    </div>
                  </Link>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dermatology;
