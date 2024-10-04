import React from 'react'
import { NavLink } from 'react-router-dom'
const Eventthree = (props) => {
  return (
    <div
    className="container"
    style={{ backgroundColor: "#453F78", borderRadius: "10px" }}
  >
    <div className="row p-2 mb-5">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6">
        {/* <h5
          className="p-2 pt-5 "
          style={{ color: "var(--secondary-color)" }}
        >
          
        </h5> */}
        <h1
          className="display-5 p-2 mt-3 mb-2"
          style={{
            color: "var(--secondary-color)",
            fontFamily: "var(--head-font)",
          }}
        >
         {props.title}
        </h1>
        <p
          className="lead p-2 mt-5 mb-5"
          style={{
            color: "var(--secondary-color)",
            fontFamily: "var(--head-para)",
          }}
        >
          {props.desc}
        </p>
        <NavLink to={props.tolink}>
            <button className='btn '
            style={{
                color:'var(--primary-color)',
                backgroundColor:'var(--secondary-color)'
            }}
            >{props.button}</button>
            </NavLink>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6">
        <img
          src={props.imgsource}
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
  )
}

export default Eventthree
