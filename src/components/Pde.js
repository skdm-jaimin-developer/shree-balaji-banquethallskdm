import React from "react";
import "./Pde.css";
import pdeone from "./Imagess/homeroomone.jpg";

import { NavLink } from "react-router-dom";
const Pde = () => {
  return (
    <>
      <section className="productDemondSection ">
        <div className="container my-5 pdecontainer">
          <div className="sectionFour productDemand">
            <div className="smallTitle mt-2">
              <h5
                style={{ textAlign: "center", fontFamily: "var(--para-font)",color:'var(--secondary-color)' }}
                className="pt-5"
              >
                For all types of events
              </h5>
            </div>
            <div className="sectionTitle">
              <h2
                style={{ textAlign: "center", fontFamily: "var(--head-font)",color:'var(--secondary-color)' }}
                className="pt-2 display-5"
              >
                Products in Demand
              </h2>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-12 col-md-6">
                <h1
                  className="text-left px-3 "
                  style={{
                    color: "white",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  5 Bhk Appartment
                </h1>
                <p className="lead text-left px-3 mt-5" style={{textAlign:'justify'}}>
                At Shree Balaji NX, we cater to all types of events, providing the perfect venues for every occasion. Whether it's a wedding, corporate gathering, or birthday celebration, our spaces are designed to impress. We also offer a luxurious 5 BHK apartment for added convenience and comfort.

                </p>
                <NavLink to="/roomstay">
              <button className="btn my-2 mb-2 mx-2" id="km">
                Know More
              </button>
            </NavLink>
              </div>

              <div className="col-12 col-md-6">
                <img src={pdeone} alt="img" className="img-fluid pdeimage" />
              </div>
            </div>

            <div className="row mt-5 mb-5">
                  <div className="col-12 col-md-6">
                    <img src={pdeone} alt="img" className="img-fluid pdeimage" />
                  </div>
              <div className="col-12 col-md-6">
                <h2
                  className="text-left mt-3 px-3"
                  style={{
                    color: "white",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  3 Bhk Appartment
                </h2>
                <p className="lead text-left px-3 mt-5" style={{textAlign:'justify'}}>
                Shree Balaji NX offers versatile event spaces for all types of occasions, ensuring a memorable experience. From weddings to corporate events, we have the perfect venue for your needs. Additionally, our 3 BHK apartment provides a comfortable and stylish stay, adding convenience to your visit

                </p>
                <NavLink to="/roomstay">
              <button className="btn my-2 mb-2 mx-2" id="km">
                Know More
              </button>
            </NavLink>
              </div>

            </div>
            
            <br></br>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pde;
