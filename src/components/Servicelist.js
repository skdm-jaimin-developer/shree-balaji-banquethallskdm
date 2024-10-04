import React from "react";
import "./Servicelist.css";
import { NavLink } from "react-router-dom";
const Servicelist = () => {
  return (
    <>
      <section className="homeSection section3">
        <div className="container">
          <div className="homeSection ">
            <nav className="navbar navbar-expand-lg navbar-light homeLine ">
              <div className="container"></div>
            </nav>
            <div className="row serviceList">
              <div className="col-md-3 ">
                <div className="servList">
                  <h1 className="servicehead">Lorem</h1> <br />
                  <br className=" md-none" />
                  <br className=" md-none" />
                  <h6 className="headser">Lorem ipsum dolor</h6>
                  <br className=" md-none" />
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
                    illum explicabo quo
                  </p>
                  <br />
                  <NavLink className="p-2" to="/about" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                </div>
              </div>

              <div className="col-md-3 ">
                <div className="servList">
                  <h1 className="servicehead">
                  Lorem  <br /> ipsum dolor
                  </h1>
                  <br className=" md-none" />
                  <h6 className="headser">ipsum dolor</h6>
                  <br className=" md-none" />
                  <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae! illum explicabo quo
                    culpa 
                  </p>
                  <br />
                  <NavLink className="p-2" to="/about" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="servList">
                  <h1 className="servicehead">
                    Lorem <br /> ipsum dolor
                  </h1>
                  <br className=" md-none" />
                  <h6 className="headser">ipsum dolor</h6>
                  <br className=" md-none" />
                  <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae! illum explicabo quo
                    
                  </p>
                  <br />
                  <NavLink className="p-2" to="/about" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="servList">
                  <h1 className="servicehead">
                    Lorem <br /> ipsum dolor
                  </h1>
                  <br className=" md-none" />
                  <h6 className="headser">ipsum dolor</h6>
                  <br className=" md-none" />
                  <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia autem officiis optio! Repellendus nihil rem
                    molestiae, quidem, nam minus officiis, illum explicabo quo
                    culpa quae architecto officia? Quaerat, expedita molestiae!
                  </p>
                  <br className=" md-none" />
                  
                  <NavLink className="p-2" to="/about" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                  
                </div>
              </div>
              
              <br className=" md-none" />
              <nav className="navbar navbar-expand-lg navbar-light homeLine ">
                <div className="container"></div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicelist;
