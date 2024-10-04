import React from 'react'
import { NavLink } from 'react-router-dom'

const Oeg = () => {
  return (
    <>
    <section className="galleryHome">
        <div className="container my-5" style={{backgroundColor:'var(--secondary-color)'}}>
            <div className="container pt-5 p-5" style={{backgroundColor:'#453F78'}}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6 style={{color:'var(--secondary-color)',
                            fontFamily:'var(--para-font)'
                        }}>OUR GALLERY</h6>
                        <h1 className='display-5' style={{color:'var(--secondary-color)',
                            fontFamily:'var(--head-font)'
                        }}>
                            Our <br />
                            Events & <br />
                            Rooms
                        </h1>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <br />
                        <p className='lead ' style={{color:'var(--secondary-color)',
                            fontFamily:'var(--para-font)'
                        }}>
                             Our gallery showcases our venue, the artistry of our culinary creations, and the comfort of our accommodations.
                        </p>
                        <div >
                            <NavLink to="/banquet"><button className="btn my-2 mb-2"  style={
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
    </>
      
    
  )
}

export default Oeg
