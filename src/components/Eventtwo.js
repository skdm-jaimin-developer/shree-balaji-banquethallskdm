import React from 'react'

import { NavLink } from 'react-router-dom'
const Eventtwo = (props) => {
  return (
    <>
    <div className="container mt-5">
    <div
              style={{
                borderTop: "1px solid gray",
                borderLeft: "1px solid gray",
                height: "70px",
                width: "90px",
                position: "absolute",
              }}
            ></div>
        <div className="row justify-content-evenly">
            
          <div className="col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6 mb-5" style={{display:'flex',margin:'auto'}}>
            
            <div>
              {" "}
              <img
                src={props.imgsource}
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
             {props.title}
            </h2>
            <p
              className="lead text-center mt-5"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--para-font)",
              }}
            >
              {props.desc}
            
            </p>
            <NavLink to={props.tolink}><button
              className="btn mt-5 px-5"
              style={{
                display: "flex",
                margin: "auto",
                backgroundColor: "#453F78",
                color: "var(--secondary-color)",
              }}
            >
              {props.button}
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
  )
}

export default Eventtwo
