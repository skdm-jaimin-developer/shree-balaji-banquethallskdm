import React from "react";
import carouseltwo from './Imagess/homeservicetwo.jpg'
const Waw = () => {
  return (
    <>
    <div className="container-fluid"  style={{ backgroundColor: "#453F78" }}>
      <div
        className="container py-5 "
        style={{ backgroundColor: "#453F78" ,borderRadius: '10px'}}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6" style={{display:'flex',margin:'auto'}}>
            <img src={carouseltwo} style={{
                display:'flex',
                margin:'auto',
                alignItems:'center',
                justifyContent:'center',
                height: "400px",
                objectFit:'cover',
                width:'100%'
                
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6">
            {/* <h5 className="p-2 pt-5" style={{ color: "var(--secondary-color)" }}>
              Who are we
            </h5> */}
            <h2
              className="display-5 p-2 "
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
             Who are we
            </h2>
            <p
              className="lead p-2 my-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-para)",
                textAlign:"justify"
              }}
            >
              From elaborate weddings to simple corporate meetings, our hall provides a stylish backdrop that enhances the experience. With ample parking, cutting-edge audiovisual equipment, and a flexible setup, our venue ensures your event runs smoothly and impresses every attendee. At Shree Balaji Banquet, we believe in flawless execution and exceptional service. Our highly trained staff is dedicated to going above and beyond to make sure your event is a success.

            </p>
            <p
              className="lead p-2 my-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-para)",
                textAlign:"justify"
              }}
            >
As the Best Banquet Hall in Bhayandar, we offer a wide range of services, including catering, decor, and event coordination, to ensure your event reflects your vision. We are committed to making every celebration a memorable one, with impeccable attention to detail and professionalism at every step.

            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Waw;
