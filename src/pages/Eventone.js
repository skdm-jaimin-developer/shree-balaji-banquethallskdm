import React from 'react'
import { NavLink } from 'react-router-dom'
const Eventone = () => {
  return (
    <section className="galleryHome">
        <div className="container my-5" style={{backgroundColor:'var(--secondary-color)'}}>
            <div className="container pt-5 p-5" style={{backgroundColor:'#453F78'}}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6 style={{color:'var(--secondary-color)',
                            fontFamily:'var(--para-font)'
                        }}>Event</h6>
                        <h1 className='display-3' style={{color:'var(--secondary-color)',
                            fontFamily:'var(--head-font)'
                        }}>
                            
                            Our <br />
                            Events 
                        </h1>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <br />
                        <p className='lead ' style={{color:'var(--secondary-color)',
                            fontFamily:'var(--para-font)'
                        }}>
                             Welcome to Shree Balaji Banquet Hall, where unforgettable moments come to life! Our banquet hall offers the perfect setting for weddings, corporate events, and special celebrations.Extend your stay in our comfortable accommodations, designed for relaxation and convenience.
                        </p>
                        <div >
                            <NavLink to="/roomstay"><button className="btn my-2 mb-2"  style={
                                {
                                    backgroundColor:'var(--secondary-color)',
                                    color:'var(--primary-color)'
                                }
                            }>Our Process</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Eventone