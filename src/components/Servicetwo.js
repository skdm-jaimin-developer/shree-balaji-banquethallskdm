import React from 'react'
import carouseltwo from './Imagess/carouseltwo.jpeg'
import expthree from './Imagess/expthree.jpg'
import servicetwo from './Imagess/servicetwo.jpeg'
import expone from './Imagess/expone.jpeg'
const Servicetwo = () => {
  return (
    <>
    <div
        className="container mt-5"
        style={{ backgroundColor: "#453F78" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <img src={carouseltwo} style={{
                display:'flex',
                margin:'auto'
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5 className="p-2 pt-5" style={{ color: "var(--secondary-color)" }}>
            Lorem ipsum 
            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
             Lorem ipsum dolor sit amet consectetur 
                   
            </h1>
            <p
              className="p-2 mb-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-para)",
              }}
            >
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
                          </p>
          </div>
        </div>
      </div>



      {/* second service section start */}
      <div
        className="container mt-5"
        style={{ backgroundColor: "" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <img src={servicetwo} style={{
                display:'flex',
                margin:'auto',
                height:'400px'
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5 className="p-2 pt-5" style={{ color: "gray" }}>
            Lorem ipsum

            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-font)"
                
              }}
            >
                   Lorem ipsum dolor sit amet consectetur 
            </h1>
            <p
              className="p-2 mb-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-para)",
              }}
            >
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
              
</p>
          </div>
        </div>
      </div>





      <div
        className="container mt-5"
        style={{ backgroundColor: "#453F78" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <img src={expthree} style={{
                display:'flex',
                margin:'auto',
              
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5 className="p-2 pt-5" style={{ color: "var(--secondary-color)" }}>
            Lorem ipsum
            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur 
            </h1>
            <p
              className="p-2 lead mb-2"
              style={{
                color: "var(--secondary-color)",
                fontFamily: "var(--head-para)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
              
</p>
          </div>
        </div>
      </div>



      {/* second service section start */}
      <div
        className="container mt-5"
        style={{ backgroundColor: "" }}
      >
        <div className="row p-2 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <img src={expone} style={{
                display:'flex',
                margin:'auto',
                height:'400px'
            }} alt="Himalayas" className="img-fluid p-2 mt-5"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6">
            <h5 className="p-2 pt-5" style={{ color: "gray" }}>
            Lorem ipsum

            </h5>
            <h1
              className="display-5 p-2 mb-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-font)",
              }}
            >
                Lorem ipsum dolor sit amet consectetur 

            </h1>
            <p
              className="p-2 lead mb-2"
              style={{
                color: "var(--primary-color)",
                fontFamily: "var(--head-para)",
              }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicetwo
