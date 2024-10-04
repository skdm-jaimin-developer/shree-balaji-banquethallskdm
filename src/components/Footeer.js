import React from 'react'
import logo from './Imagess/logo.png'
import './Footeer.css'
import { FaInstagram ,FaFacebook,FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import serviceone from "./Imagess/serviceone.jpeg";
import servicetwo from "./Imagess/servicetwo.jpeg";

const Footeer = () => {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:'black'}}>
      <div className='container'>
      <div className='row justify-content-evenly' style={{backgroundColor:'black',color:'var(--primary-color)'}}>
          <div className='col-12 col-md-6 col-lg-3 col-xlg-3 col-xxlg-3 mt-3 p-2'>
            <img src={logo} className='mb-2' style={{height:'7vh'}} alt='Himalaya'/> <br/>
            <span> <FaInstagram style={{color:'white',fontSize:'25px'}} /> </span>
            <span> <FaFacebook style={{color:'white',fontSize:'25px'}} /> </span> 
            <span> <FaGoogle  style={{color:'white',fontSize:'25px'}} /> </span>  
          </div>
          <div className='col-12 col-md-6 col-lg-3 col-xlg-3 col-xxlg-3 mt-3 p-2'>
            <h5 style={{fontFamily:'var(--head-font)' ,color:'var(--secondary-color)'}}>Address</h5>
            <p className='p-1'>
            Balaji Complex, 150 Feet Rd, next to Flyover, Bhayandar West,
            Mumbai, Mira Bhayandar, Maharashtra 401101
            </p>
          </div>
          <div className='col-12 col-md-6 col-lg-3 col-xlg-3 col-xxlg-3 mt-3 p-2'>
          <h5 style={{fontFamily:'var(--head-font)',color:'var(--secondary-color)'}}>Contact Us</h5>
           <a href='tel:7678014775' style={{textDecoration:'none',color:'var(--primary-color)'}}> <h6>+91 7678014775</h6></a>
           <a href='mailto:shreebalajihospitality2703@gmail.com' style={{textDecoration:'none',color:'var(--primary-color)'}}> <h6>shreebalajihospitality2703@gmail.com</h6></a>
          </div>
          <div className='col-12 col-md-6 col-lg-3 col-xlg-3 col-xxlg-3 mt-3 p-2'>
          <h5 style={{fontFamily:'var(--head-font)',color:'var(--secondary-color)'}}>Gallery</h5>
          
          {/* small gallery */}
          
          <NavLink to='/gallery'>
            <img src={serviceone} alt='img' className='sgallery p-2'/>
          </NavLink>
          <NavLink to='/gallery'>
          <img src={servicetwo} alt='img' className='sgallery p-2'/>
          </NavLink>
         
         
          </div>
      </div>
      <div className='row justify-content-evenly' style={{backgroundColor:'black',color:'var(--primary-color)'}}>
          <div className='col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6 p-2'>
          <h6 className='text-center  p-1'>Copyright © 2024, All Right Reserved Himalayas Hospitality | Catering
          </h6>
          </div>
          <div className='col-12 col-md-6 col-lg-6 col-xlg-6 col-xxlg-6 p-2'>
            <span><h6 className='text-center p-1'>Designed by Shree krishna digital marketing</h6></span>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footeer
