import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import carouselone from './Imagess/bannerone.jpg'
import carouseltwo from './Imagess/bannertwo.jpg'
import carouselthree from './Imagess/bannerthree.jpg'
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './Carouselheroa.css'
const Carouselheroa = () => {
  
  return (
    <>
    <section className="homeSection mt-5" >
        
        <div className='container-fluid'>
        
        
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
        <div className="imagec-container">
      <img src={carouselone} alt="img" className="imagec" />
      <div className="overlaya">
        
        <div>
        <h1 className='p-2 ' style={{fontSize:'75px',fontFamily:'var(--head-font)'}}>About Us</h1>
        <p className='lead text-center'>
          Discover the Ultimate Event Experience at Shree Balaji NX Banquet

        </p>
    </div>
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="imagec-container">
      <img src={carouseltwo} alt="img" className="imagec" />
      <div className="overlaya">
        <div>
      <h1 className='p-2 display-1' style={{fontSize:'75px',fontFamily:'var(--head-font)'}}>About Us</h1>
      <p className='lead text-center'>
        Discover the Ultimate Event Experience at Shree Balaji NX Banquet

      </p>
      </div></div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imagec-container">
      <img src={carouselthree} alt="img" className="imagec" />
      <div className="overlaya">
        <div>
      <h1 className='p-2  display-1' style={{fontSize:'75px',fontFamily:'var(--head-font)'}}>About Us</h1>
      <p className='lead text-center'>
        Discover the Ultimate Event Experience at Shree Balaji NX Banquet

      </p>
      </div></div>
    </div>
        </SwiperSlide>
        
      </Swiper>
      <div className="container">
  <nav className="navbar navbar-expand-lg mb-5" style={{backgroundColor:'var(--secondary-color)'}}>
    <div className="container-fluid">
      
    </div>
  </nav>
</div>
        </div>
    </section>
    </>
  )
}

export default Carouselheroa
