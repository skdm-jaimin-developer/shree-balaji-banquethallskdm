import React from 'react'
import mainimgone from './images/mainimgone.jpeg'
import mainimgtwo from './images/mainimgtwo.jpeg'
const Hero = () => {
  return (
    <div>
      <div className='row mt-2 ' style={{marginRight:'0'}}>
        <div className='col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  mt-5 p-5  '>
            <h2 className='text-center mt-2 display-2' style={{color:'var(--secondary-color)'}}>
                Himalayas
            </h2>
            <h4 className='text-center display-6 ' style={{color:'var(--secondary-color)'}}>
                Hospitality Service |
                <br/> Catering Service
            </h4>
            <p className='lead text-center'> 
            "Serving Happiness,Your Event, Our Passion."
            </p>
        </div>
        <div className='col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3  my-2 p-2 '>
          <img className='img-fluid main' style={{borderRadius:'10px'}}  src={mainimgone} alt=''/>
        </div>
        <div className='col-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 pt-4 mt-2   '>
        <img className='img-fluid main' style={{borderRadius:'10px'}} src={mainimgtwo} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Hero
