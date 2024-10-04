import React from "react";

const Contactone = () => {
  return (
    <>
      <div className="container mb-5" style={{ backgroundColor: "#453F78" }}>
        <p
          className="text-center p-2 pt-5"
          style={{ color: "var(--secondary-color)" }}
        >
          Let's Connect
        </p>
        <h1
          className="text-center display-2 pt-2"
          style={{
            color: "var(--secondary-color)",
            fontFamily: "var(--head-font)",
          }}
        >
          Contact
        </h1>
        <div className="row">
          <div className="col-12 col-md-4 pt-5">
            <h5
              className="text-center p-2  pt-5"
              style={{ color: "var(--secondary-color)" }}
            >
              Get In Touch
            </h5>
            <h5
              className="text-center px-2 "
              style={{ color: "var(--secondary-color)" }}
            >
              Feel free to drop me an call anytime. I’d love to hear from you.
            </h5>

            <a
              href="tel:7678014775"
              className="text-center px-2 pt-2 "
              style={{
                textDecoration: "none",
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              <h6>+91 7678014775</h6>
            </a>
          </div>
          <div className="col-12 col-md-4 pt-5">
            <h5
              className="text-center p-2 pt-5"
              style={{ color: "var(--secondary-color)" }}
            >
              Come & Visit
            </h5>
            <h6
              className="text-center px-2 "
              style={{ color: "var(--secondary-color)" }}
            >
              Balaji Complex, 150 Feet Rd, next to Flyover, Bhayandar West,
              Mumbai, Mira Bhayandar, Maharashtra 401101
            </h6>
            <h5
              className="text-center px-2 pt-2 "
              style={{ color: "var(--secondary-color)" }}
            >
              See Directions
            </h5>
          </div>
          <div className="col-12 col-md-4 pt-5">
            <h5
              className="text-center p-2 pt-5"
              style={{ color: "var(--secondary-color)" }}
            >
              Drop An Email
            </h5>
            <h5
              className="text-center px-2 "
              style={{ color: "var(--secondary-color)" }}
            >
              Also feel free to drop me an email. We usually respond within 24h.
            </h5>
            <br />
            <a
              href="mailto:shreebalajihospitality2703@gmail.com"
              className="text-center pt-5 "
              style={{
                textDecoration: "none",
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              <h6>shreebalajihospitality2703@gmail.com</h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactone;
