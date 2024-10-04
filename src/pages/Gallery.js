import React from 'react'
import Oeg from '../components/Oeg'
import Aboutimg from '../components/Aboutimg'
import Galleryimg from '../components/Galleryimg'

const Gallery = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Oeg/>
      <Aboutimg/>
      <Galleryimg/>
    </div>
  )
}

export default Gallery
