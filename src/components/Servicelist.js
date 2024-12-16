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
                  <h2 className="servicehead">Wedding</h2> <br />
               
                 
                  <p className="p-2" style={{textAlign:'justify'}}>
                  Looking for the perfect venue for your big day? Shree Balaji NX offers spacious and beautifully designed Wedding Party Halls for Events in Bhayandar West, ideal for creating unforgettable memories. Our halls provide a luxurious setting, exceptional service, and attention to detail to make your wedding truly special and stress-free.

                  </p>
                  <br />
                  <NavLink className="p-2" to="/event" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                </div>
              </div>

              <div className="col-md-3 ">
                <div className="servList">
                  <h2 className="servicehead">
                  Birthday
                  </h2>
                  <br className=" md-none" />
                 
                  <p className="p-2" style={{textAlign:'justify'}}>
                  Celebrate your special day at Shree Balaji NX with our beautifully designed venues. Our spacious halls offer the perfect atmosphere for birthday parties, providing exceptional service and elegant decor. We offer Birthday Party Halls for Events in Bhayandar West to make your celebration unforgettable and full of cherished memories.

                  </p>
                  <br />
                  <NavLink className="p-2" to="/event" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="servList">
                  <h2 className="servicehead">
                  Engagement
                  </h2>
                  <br className=" md-none" />
                 
                  <p className="p-2" style={{textAlign:'justify'}}>
                  Shree Balaji NX offers the perfect venue for your engagement celebrations. Our elegant halls provide a beautiful setting for your special day, with impeccable service and stunning decor. We specialize in creating unforgettable moments. Explore our Engagement Halls for Events in Bhayandar West and make your engagement truly memorable.

                    
                  </p>
                  <br />
                  <NavLink className="p-2" to="/event" style={{
                    color:'var(--secondary-color)'
                  }}>Know More  </NavLink>
<br className=" md-none" />
<br className=" md-none" />

                </div>
              </div>
              <div className="col-md-3 ">
                <div className="servList">
                  <h2 className="servicehead">
                  Sangeet
                  </h2>
                  <br className=" md-none" />
                  
                  <p className="p-2" style={{textAlign:'justify'}}>
                  Shree Balaji NX offers the perfect venue for your Sangeet celebration. Our beautifully designed halls provide an ideal setting for dance, music, and fun. With excellent service and stunning decor, we ensure your event is unforgettable. Discover our Sangeet Halls for Events in Bhayandar West for an exceptional celebration.

                  </p>
                  <br className=" md-none" />
                  
                  <NavLink className="p-2" to="/event" style={{
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
