import React from 'react'
import Carouselheroa from '../components/Carouselheroa'
import Ourstory from '../components/Ourstory'
import Waw from '../components/Waw'
import Carousel from '../components/Carousel'
import Aboutimg from '../components/Aboutimg'

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Carouselheroa/>
      <Ourstory/>
      <Waw/>
      <Aboutimg/>
      <Carousel/>
    </div>
  )
}

export default About
