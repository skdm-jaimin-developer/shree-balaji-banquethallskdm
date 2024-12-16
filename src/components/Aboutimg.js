import React from "react";
import carouselthree from "./Imagess/aboutonee.jpg";
import pdeone from "./Imagess/abouttwoo.jpg";
import "./Aboutimg.css";
const Aboutimg = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <div
              className="imgadiv"
              style={{
                position: "relative",
                height: "400px",
               
                backgroundColor: "black",
              }}
            >
              <img
                src={carouselthree}
                style={{
                  display: "flex",
                  margin: "auto",
                  height: "400px",
                
                  opacity: ".5",
                }}
                alt="Himalayas"
                className="img-fluid  mt-5 abtimg"
              />
              <div
                className=""
                style={{
                  position: "absolute",
                  left: " 45%",
                  top: "20%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h4
                  className="text-center"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "var(--secondary-color)",
                    fontWeight: "bold",
                  }}
                >
                 Banquet Hall
                </h4>
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  left: " 45%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h2
                  className="text-center"
                  style={{
                    fontFamily: "var(--head-font)",
                    color: "var(--secondary-color)",
                  }}
                >
                 Your Celebration, Our Passion
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <div
              className="imgadiv"
              style={{ position: "relative", backgroundColor: "black" ,}}
            >
              <img
                src={pdeone}
                style={{
                  display: "flex",
                  margin: "auto",
                  height: "400px",
                  
                  opacity: ".5",
                }}
                alt="Himalayas"
                className="img-fluid  mt-5 abtimg"
              />

              <div
                className=""
                style={{
                  position: "absolute",
                  left: " 45%",
                  top: "20%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h4
                  className="text-center"
                  style={{
                    fontFamily: "var(--para-font)",
                    color: "var(--secondary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Room Stays
                </h4>
              </div>
              <div
                className=""
                style={{
                  position: "absolute",
                  left: " 45%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <h2
                  className="text-center"
                  style={{
                    fontFamily: "var(--head-font)",
                    color: "var(--secondary-color)",
                  }}
                >
                  Comfort Meets Convenience
                </h2>
              </div>
            </div>
          </div>

          <br />
        </div>
      </div>
    </>
  );
};

export default Aboutimg;
