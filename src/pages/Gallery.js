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
      <div className='container my-5' style={{display:'none'}}>
        <p className='lead'>
        Welcome to the gallery of Shree Balaji Banquet, the perfect Banquet Hall to host your most memorable events. Our venue is designed to create unforgettable moments, offering an elegant and versatile space that suits every occasion. From weddings and anniversaries to corporate functions and birthday parties, our Banquet Hall provides the ideal backdrop for a range of events. Browse through our images to see how we transform our space to fit your unique vision. Each event hosted at Shree Balaji Banquet is a testament to the elegance and professionalism we uphold.

        </p>
        <p className='lead'>
        Our Banquet Hall is a blend of modern luxury and timeless elegance, featuring exquisite interiors, comfortable seating arrangements, and state-of-the-art amenities. Whether you are planning a grand wedding or an intimate celebration, our space can be customised to meet your specific needs. The stunning décor, combined with world-class facilities, ensures that every event hosted at Shree Balaji Banquet is exceptional. Take a closer look at our gallery to see how our team brings each vision to life with attention to detail and creativity.

        </p>
        <p className='lead'>
        As you explore our gallery, you will find a variety of event setups, showcasing the versatility of our Banquet Hall. Whether it's a beautifully decorated wedding reception, a professional corporate gathering, or a joyous family celebration, our venue can be adapted to suit the style and theme of any event. We pride ourselves on providing a venue that enhances the experience for both hosts and guests, offering a comfortable, luxurious, and inviting atmosphere for every occasion.

        </p>
      </div>
    </div>
  )
}

export default Gallery
