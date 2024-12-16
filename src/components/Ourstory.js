import React from "react";
import logo from './Imagess/expthree.jpg' 
const Ourstory = () => {
  return (
    <>
      <div
        className="container"
        style={{  borderRadius: "10px" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6">
            {/* <h5
              className="p-2 pt-5 "
              style={{ color: "var(--primary-color)" }}
            >
             
            </h5> */}
            <h2
              className="display-5 p-2 "
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
               Our Story
            </h2>
            <p
              className="lead p-2 my-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-para)",
                textAlign:'justify'
              }}
            >
             Welcome to Shree Balaji Banquet, the Best Banquet Hall in Bhayandar for your most special occasions. Situated in a prime location, our air-conditioned hall is designed to accommodate 75 to 250 guests comfortably, making it the perfect choice for both intimate gatherings and large-scale celebrations. Whether you’re hosting a wedding, a corporate event, or a family gathering, we offer the ideal setting for every event.
            </p>
            <p
              className="lead p-2 my-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-para)",
                textAlign:'justify'
              }}
            >
            With our commitment to excellence, we ensure that every detail is taken care of with precision and elegance, delivering an unforgettable experience for you and your guests.
             As the Best Banquet Hall in Bhayandar, Shree Balaji Banquet combines sophisticated interiors with modern amenities to create a luxurious space for all types of events. Our banquet hall boasts exquisite design, top-notch facilities, and versatile spaces that can be customised to meet your unique needs.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6">
            <img
              src={logo}
              style={{
                height: "400px",
                display: "flex",
                margin: "auto",
              }}
              alt="Himalayas"
              className="img-fluid p-2 mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
