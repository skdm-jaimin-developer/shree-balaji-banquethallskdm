import React from "react";
import logo from './Imagess/logo.png' 
const Ourstory = () => {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#453F78", borderRadius: "10px" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5
              className="p-2 pt-5 "
              style={{ color: "var(--secondary-color)" }}
            >
              Our Story
            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
              Crafting Unforgettable Experiences -
            </h1>
            <p
              className="lead p-2 mt-5 mb-5"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-para)",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              excepturi illo qui repudiandae? Quo omnis, sapiente sequi
              praesentium ad, corporis, culpa ratione quis veniam libero
              perferendis at tempore et. Ratione!corporis, culpa ratione quis veniam libero
              perferendis at tempore et. Ratione! Ratione!corporis, culpa ratione quis veniam libero
              perferendis at tempore et. Ratione!
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
