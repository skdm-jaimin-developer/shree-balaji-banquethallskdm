import React from 'react'
import './Expertise.css'
import { NavLink } from 'react-router-dom'
import expone from './Imagess/homeexpone.jpg'
import exptwo from './Imagess/homeexptwo.jpg'
import expthree from './Imagess/homeexpthree.jpg.jpeg'
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
                                <h2 className=' px-2 Eh'>Banquet Service | <br/>Hospitality Service </h2>
                                <p className=' px-2 mt-5 lead Et' style={{textAlign:"justify"}}>
                                Our Banquet Hall in Bhayandar West is equipped with state-of-the-art amenities and a sophisticated ambiance that suits all types of occasions. Whether you’re planning an intimate gathering or a grand celebration, we offer customizable spaces to meet your specific needs. Our spacious hall can accommodate both small and large guest lists, ensuring everyone feels welcome and comfortable. The modern décor, lighting, and sound system add a touch of luxury to your event, while our in-house team ensures everything runs smoothly from start to finish.
                                </p>
                                <p className=' px-2 lead Et' style={{textAlign:"justify"}}>
                                At Shree Balaji Banquet, we understand that every event is unique, which is why we offer a range of services to help bring your vision to life. From catering and decor to event coordination, our experienced team is here to assist you in creating a personalised experience that exceeds expectations. As one of the top Banquet Halls in Bhayandar West, we pride ourselves on providing exceptional service, delicious food, and a setting that will leave a lasting impression on your guests.
                                </p>
                               
                                <p className=' px-2 lead Et' style={{textAlign:"justify"}}>
                                Book your event with Shree Balaji Banquet today and let us turn your special occasion into a beautiful memory. Our commitment to excellence ensures that every detail is taken care of, so you can enjoy your celebration without worry.
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
                    <div className="col-md-6 p-5">
                        <div className="img-expertise"><img className='img-fluid img-expertise my-2 ' src={exptwo} alt=""/></div>
                        <div className="img-expertise mt-2"><img className='img-fluid img-expertise my-2 ' src={expone} alt=""/></div>
                    </div>
                    <div className='mt-2'>
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
