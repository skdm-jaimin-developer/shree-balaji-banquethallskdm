import React from 'react'
import './Amenities.css'
import { FaWifi } from "react-icons/fa";




const Amenities = () => {
  return (
    <>
    <div className='container mt-5'>
        <h2>Amenities:</h2>
        <div className='mx-4'>
            <div className='row'>
                <div className='col-12 col-md-4'><h5><FaWifi className='mx-2'/> Wifi</h5></div>
                <div className='col-12 col-md-4'><h5><LuParkingCircle className='mx-2'/> Parking</h5></div>
                <div className='col-12 col-md-4'><h5><BsFillPeopleFill className='mx-2'/> Up to 555 people</h5></div>
            </div>
            <br/>
            <div className='row'>
                <div className='col-12 col-md-4'><h5><BsFillPeopleFill className='mx-2'/> Up to 555 people</h5></div>
                <div className='col-12 col-md-4'><h5><BiFoodTag style={{color:'green'}} className='mx-2'/> Veg Food</h5></div>
                <div className='col-12 col-md-4'></div>
            </div>
            <br/>
            
            
        </div>
    </div>
    </>
  )
}

export default Amenities
