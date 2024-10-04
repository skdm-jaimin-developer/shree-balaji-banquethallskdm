import React from "react";
import { Image } from "antd";
import "./Serviceparticular.css";

import { useLocation } from "react-router-dom";
import Contactuscard from "../components/Contactuscard";
import Servicedata from "../components/data/Servicedata";

const Serviceparticular = () => {
  window.scrollTo(0, 0);
  const path = useLocation();
  const search = path.pathname;
  console.log(search);
  return (
    <>
      {Servicedata.filter((data) => data.slugs === search).map((data, i) => {
        console.log(data);
        return (
          <>
            <div className="container my-5" key={i}>
              <Image.PreviewGroup>
                <div className="row">
                  <div
                    className="col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6"
                    style={{ margin: "auto" }}
                  >
                    <div className="imgdiv">
                      <img
                        className="img-fluid"
                        id="imgpreviewmain"
                        alt="img"
                        src={data.image[0]}
                      />
                    </div>

                    {/* <span className="mx-auto">
                {data.image.slice(1,5).map(dataimg=>{
                    return(
                        <Image key={dataimg} style={{ width: 100, height: 100 }} src={dataimg} />
                    )
                })}
              </span> */}
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6"
                    key={i}
                  >
                    <h1
                      className="display-3 p-2"
                      key={i}
                      style={{
                        color: "var(--primary-color)",
                        fontFamily: "var(--head-font)",
                      }}
                    >
                      {data.title}
                    </h1>
                    {/* <h5 className=" p-2" style={{color:'var(--secondary-color)'}}>
                  Price Starting at ₹{data.price}
                </h5> */}
                    <h5>
                      <p
                        className="lead p-2"
                        key={i}
                        style={{ color: "var(--secondary-color)" }}
                      >
                        {data.desc}
                      </p>
                      <p
                        className="lead p-2"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque cum sunt aspernatur esse nam voluptatibus, quasi
                        mollitia dignissimos culpa optio illo, maiores in,
                        dolorum reprehenderit suscipit architecto praesentium
                        hic quaerat?
                      </p>
                      <p
                        className="lead p-2"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque cum sunt aspernatur esse nam voluptatibus, quasi
                        mollitia dignissimos culpa optio illo, maiores in,
                        dolorum reprehenderit suscipit architecto praesentium
                        hic quaerat?
                      </p>
                      <p
                        className="lead p-2"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque cum sunt aspernatur esse nam voluptatibus, quasi
                        mollitia dignissimos culpa optio illo, maiores in,
                        dolorum reprehenderit suscipit architecto praesentium
                        hic quaerat?
                      </p>
                    </h5>
                    {/* {data.feature.slice(0,5).map(datafeature=>{
                      return(
                          <ul>
                              <li>{datafeature}</li>
                          </ul>
                      )
                  })} */}
                  </div>
                </div>
              </Image.PreviewGroup>
            </div>

            <div className="container mt-5">
              <h2>Amenities:</h2>
              <div className="mx-4">
                <div className="row">
                  
                  {data.amenities.map((amenity ,index)=>(
                    <div className="col-12 col-md-3 mt-3">
                    <h5>
                      <span className="mx-2"> {amenity.logo} </span> {amenity.amenity}
                    </h5>
                  </div>
                  ))}
                  
                  
                </div>
                <br />
              </div>
            </div>

            <div
              className="container my-5"
              style={{ backgroundColor: "#453F78", borderRadius: "10px" }}
            >
              <div className="py-2">
                <h2
                  className="text-center mt-5 display-5"
                  style={{
                    color: "var(--secondary-color)",
                    fontFamily: "var(--head-font)",
                  }}
                >
                  -{data.title} Gallery-
                </h2>
              </div>
              <div className="row py-2">
                <Image.PreviewGroup>
                  {data.image.slice(1, 7).map((dataimg) => {
                    return (
                      <div
                        className="col-12 col-md-6 col-lg-4 col-xlg-4 col-xxlg-4 p-2"
                        style={{ margin: "auto" }}
                        key={dataimg}
                      >
                        <Image
                          src={dataimg}
                          id="imagesub"
                          className="img-fluid "
                          style={{ height: "300px", borderRadius: "10px" }}
                        />
                      </div>
                    );
                  })}
                </Image.PreviewGroup>
              </div>
            </div>
            <Contactuscard title="Connect With Us" />
          </>
        );
      })}
    </>
  );
};

export default Serviceparticular;
