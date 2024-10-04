import React from 'react'
import connect from './Imagess/connect.jpg'
import './Connect.css'
import { NavLink } from 'react-router-dom'
const Connect = () => {
  return (
    <>
    <div className='container mt-5 connectimg'>
        <img src={connect} alt='Connect'/>
        <div className='connectoverlay'>
            <h1 className='text-center'>"Let’s Create Unforgettable Moments Together!"</h1>
            <button className='btn mt-5' >
                <NavLink  to='/contact'>Connect</NavLink>
                </button>
        </div>
    </div>
    </>
  )
}

export default Connect
