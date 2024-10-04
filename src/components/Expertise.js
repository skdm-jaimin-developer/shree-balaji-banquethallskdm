import React from 'react'
import './Expertise.css'
import { NavLink } from 'react-router-dom'
import expone from './Imagess/expone.jpeg'
import exptwo from './Imagess/exptwo.jpeg'
import expthree from './Imagess/expthree.jpg'
const Expertise = () => {
  return (
    <>
         <section className="homeSection">
        <div className="container my-5 expertisecontainer" >
            <div className="homeSec sectservice">
                <div className="row maragin">
                    <div className="col-md-6">
                        <div className="galleryLink">
                            <div className="gallContent">
                                <h6 className=' p-3 pt-5 Ep'>Expertise in</h6>
                                <h1 className=' px-2 Eh'>Banquet Service | <br/>Hospitality Service </h1>
                                <p className=' px-2 mt-5 lead Et'>
                                Experience elegance and warmth at our banquet hall, where every event is tailored to your vision. Our hospitality service ensures a seamless experience, from exquisite catering to attentive staff. Whether it’s a wedding, corporate gathering, or special celebration, we’re dedicated to making your occasion unforgettable. Let us help you create lasting memories!
                                     </p>
                                <p className=' px-2 lead Et'>
                                Enhance your experience with our comfortable room accommodations, perfect for guests attending events at our banquet hall. Our inviting rooms are equipped with modern amenities and cozy furnishings to ensure a restful stay. Whether you’re here for a wedding, corporate event, or family gathering, enjoy the convenience of on-site lodging. Relax and recharge with us, making your visit truly seamless and enjoyable!
                                </p>
                               
                                <p className=' px-2 lead Et'>
                                Indulge your guests with our exceptional catering service, designed to elevate any event at our banquet hall. We offer a diverse menu featuring delicious, high-quality dishes, customizable to suit your tastes and dietary needs. From appetizers to desserts, our culinary team ensures every bite is a delight. Combined with our warm hospitality, we’re committed to making your event a memorable culinary experience!
                                </p>
                                {/* <p className=' px-2 lead Et'>
                                Professional Staffing: Our  team is experienced and professional, ensuring that every interaction reflects our commitment to excellence. 
                                </p>
                                <p className=' px-2 lead Et'>
                                Event Coordination: Our event coordinators work with you to plan every detail, ensuring that your vision comes to life seamlessly.
                                </p> */}

                                <NavLink to='/gallery'>
                <button className='btn my-2 mb-2' id='km' >Know More</button></NavLink>
                   <br></br>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-expertise"><img className='img-expertise' src={exptwo} alt=""/></div>
                        <div className="img-expertise"><img className='img-expertise' src={expone} alt=""/></div>
                    </div>
                    <div className=''>
                                <img className='img-expertiseone img-fluid my-2' src={expthree} alt=""/>
                            </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Expertise
