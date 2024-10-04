import React from "react";
import serviceone from "./Imagess/serviceone.jpeg";
import { NavLink } from "react-router-dom";

const Eventshome = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-evenly">
          <div className="col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <div
              style={{
                borderTop: "1px solid gray",
                borderLeft: "1px solid gray",
                height: "70px",
                width: "90px",
                position: "absolute",
              }}
            ></div>
            <div>
              {" "}
              <img
                src={serviceone}
                style={{ width: "100%", height: "500px" }}
                alt="img"
                className="img-fluid p-3 "
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h2
              className="text-center mt-5 display-5"
              style={{
                fontFamily: "var(--head-font)",
                color: "var(--primary-color)",
              }}
            >
              Events
            </h2>
            <p
              className="lead text-center mt-5"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--para-font)",
              }}
            >
              Welcome to our Events Section, your go-to resource for all the
              incredible gatherings we host in our banquet hall! Whether you’re
              planning a wedding, corporate event, birthday party, or family
              reunion, we have the perfect space for you.
            </p>
            <NavLink to='/event'><button
              className="btn mt-5 px-5"
              style={{
                display: "flex",
                margin: "auto",
                backgroundColor: "#453F78",
                color: "var(--secondary-color)",
              }}
            >
              Events
            </button></NavLink>
            <div
            style={{
              borderBottom: "1px solid gray",
              borderRight: "1px solid gray",
              height: "70px",
              width: "70px",
              position: "relative",
              float:"inline-end",
              marginTop: "9%",
            }}
            className="mb-5"
          ></div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Eventshome;
