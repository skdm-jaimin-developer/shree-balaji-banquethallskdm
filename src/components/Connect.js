import React from 'react'
import connect from './Imagess/bannerthree.jpg'
import './Connect.css'
import { NavLink } from 'react-router-dom'
const Connect = () => {
  return (
    <>
    <div className='container mt-5 connectimg'>
        <img src={connect} alt='Connect'/>
        <div className='connectoverlay'>
            <h2 className='text-center'>"Let’s Create Unforgettable Moments Together!"</h2>
            <button className='btn mt-5' >
                <NavLink  to='/contact'>Connect</NavLink>
                </button>
        </div>
    </div>
    </>
  )
}

export default Connect
