import wcuone from "./Imagess/wcuone.png";
import wcutwo from "./Imagess/wcutwo.png";
import wcuthree from "./Imagess/wcuthree.png";
import wcufour from "./Imagess/wcufour.png";
import'./Wcu.css';
const Wcu = () => {
  return (
    <>
      <div className="conatainer mt-5 mb-5">
        <div className="container mt-5">
        <div className="row mt-5" style={{ marginLeft: "0", marginRight: "0" }}>
          <h2
            className="text-center mt-5 display-5 "
            style={{ color: "black" ,fontFamily:'var(--head-font)'}}
          >
            <strong>Why Choose Us ?</strong>
          </h2>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-5 p-2">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" 
              style={{maxWidth:'auto',height:"auto"}}
              src={wcuone} alt="" />
              <h2
                className="text-center  display-6"
                style={{ color: "var(--primary-color)" }}
              >
                555+
              </h2>
              <h5
                className="text-center  "
                style={{ color: "var(--primary-color)" }}
              >
                Customers Served
              </h5>
              <br />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2 mt-5 mb-5">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" src={wcutwo} alt="" />
              <h2
                className="text-center  display-6"
                style={{ color: "var(--primary-color)" }}
              >
                55+
              </h2>
              <h5
                className="text-center   "
                style={{ color: "var(--primary-color)" }}
              >
                Succesful Events
              </h5>
              <br />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-5 p-2">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" src={wcuthree} alt="" />
              <h2
                className="text-center   display-6"
                style={{ color: "var(--primary-color)" }}
              >
                5+
              </h2>
              <h5
                className="text-center   "
                style={{ color: "var(--primary-color)" }}
              >
                Qualified Staff
              </h5>
              <br />
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2 mt-5">
            <div
              className=""
               
            >
              <img className="img-fluid p-2 imga" src={wcufour} alt="" />
              <h2
                className="text-center   display-6"
                style={{ color: "var(--primary-color)" }}
              >
                5+
              </h2>
              <h5
                className="text-center   "
                style={{ color: "var(--primary-color)" }}
              >
                Year's Experience
              </h5>
              <br />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Wcu;
