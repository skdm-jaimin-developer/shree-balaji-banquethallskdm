import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import carouselone from './Imagess/bannerone.jpg'
import carouseltwo from './Imagess/bannertwo.jpg'
import carouselthree from './Imagess/bannerthree.jpg'
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './Carouselhero.css'
const Carouselhero = () => {
  
  return (
    <>
    <section className="homeSection mt-5" >
        
        <div className='container-fluid' style={{borderRadius: '10px'}}>
        
        
        <Swiper  
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        className="mySwiper swiperhero"
           modules={[Pagination,Autoplay]}>
        <SwiperSlide>
        <div className="image-container">
      <img src={carouselone} alt="img" className="image" />
      <div className="overlay">
        <h5 className='p-2'>Welcome to</h5>
        <h1 className='p-2 display-1' style={{fontFamily:'var(--head-font)'}}>Shree Balaji <br/> NX Banquet</h1>
        <h5 className='p-2'>"The Perfect Venue for Your Special Celebrations"</h5>
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="image-container">
      <img src={carouseltwo} alt="img" className="image" />
      <div className="overlay">
        <h5 className='p-2'>Welcome to</h5>
        <h1 className='p-2 display-1' style={{fontFamily:'var(--head-font)'}}>Shree Balaji <br/> NX Banquet</h1>
        <h5 className='p-2'>"The Perfect Venue for Your Special Celebrations"</h5>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="image-container">
      <img src={carouselthree} alt="img" className="image" />
      <div className="overlay">
        <h5 className='p-2'>Welcome to</h5>
        <h1 className='p-2 display-1' style={{fontFamily:'var(--head-font)'}}>Shree Balaji <br/> NX Banquet</h1>
        <h5 className='p-2'>"The Perfect Venue for Your Special Celebrations"</h5>
      </div>
    </div>
        </SwiperSlide>
        
      </Swiper>
      <div className="container">
  <nav className="navbar navbar-expand-lg " style={{backgroundColor:'var(--secondary-color)'}}>
    <div className="container-fluid">
      
    </div>
  </nav>
</div>
        </div>
    </section>
    </>
  )
}

export default Carouselhero
