import React from "react";
import "./Pde.css";
import pdeone from "./Imagess/pdeone.jpeg";

import { NavLink } from "react-router-dom";
const Pde = () => {
  return (
    <>
      <section className="productDemondSection">
        <div className="container my-5 pdecontainer">
          <div className="sectionFour productDemand">
            <div className="smallTitle mt-2">
              <h5
                style={{ textAlign: "center", fontFamily: "var(--para-font)" }}
                className="pt-5"
              >
                For all types of events
              </h5>
            </div>
            <div className="sectionTitle">
              <h2
                style={{ textAlign: "center", fontFamily: "var(--head-font)" }}
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
                    color: "var(--secondary-color)",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  5 Bhk Appartment
                </h1>
                <p className="lead text-left px-3 mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                  quas accusantium, assumenda commodi aliquid rerum non qui ea
                  ducimus ratione eius odio cupiditate delectus, reiciendis
                  incidunt impedit eaque eos. Rerum.
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
                <h1
                  className="text-left mt-3 px-3"
                  style={{
                    color: "var(--secondary-color)",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  5 Bhk Appartment
                </h1>
                <p className="lead text-left px-3 mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                  quas accusantium, assumenda commodi aliquid rerum non qui ea
                  ducimus ratione eius odio cupiditate delectus, reiciendis
                  incidunt impedit eaque eos. Rerum.
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
