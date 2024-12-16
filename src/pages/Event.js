import React from 'react'
import Eventone from './Eventone'
import Eventtwo from '../components/Eventtwo'
import Eventthree from '../components/Eventthree'
import serviceone from '../components/Imagess/wedding.jpg'
import carouselone from '../components/Imagess/birthday.jpg'
import carouseltwo from '../components/Imagess/corporateevents.jpg'
import connect from '../components/Imagess/engagement.jpeg'
import Contact from '../components/Imagess/sangeet.jpg'
import exptwo from '../components/Imagess/namingceremony.jpg'
import expthree from '../components/Imagess/mehandi.jpg'

const Event = () => {
  return (
    <>
   <Eventone/>
   <Eventtwo 
   title='Wedding'
   desc="Looking for the perfect venue for your big day? Shree Balaji NX offers spacious and beautifully designed Wedding Party Halls for Events in Bhayandar West, ideal for creating unforgettable memories. Our halls provide a luxurious setting, exceptional service, and attention to detail to make your wedding truly special and stress-free."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={serviceone}
   />


   <Eventthree 
   title='Birthday'
   desc="Celebrate your special occasion at Shree Balaji NX, where we offer exquisite Birthday Party Halls for Events in Bhayandar West. Our elegant venues are perfect for creating lasting memories with loved ones. With impeccable service, stunning decor, and a welcoming atmosphere, your event will be nothing short of spectacular."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={carouselone}
   />


   <Eventtwo 
   title='Corporate Events'
   desc="Shree Balaji NX offers the perfect setting for your wedding celebrations. Our elegant venue is designed to create unforgettable memories. Whether it’s an intimate gathering or a grand event, we provide exceptional service and attention to detail. We also offer Corporate Events Halls in Bhayandar West for all your professional needs."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={carouseltwo}
   />

   <Eventthree 
   title='Engagement'
   desc="Shree Balaji NX offers the perfect venue for your wedding celebrations. Our spacious halls are ideal for creating unforgettable memories with your loved ones. With exceptional service, beautiful decor, and a welcoming atmosphere, we ensure your event is seamless. We also provide Engagement Party Halls for Events in Bhayandar West for your special day."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={connect}
   />

<Eventtwo 
   title='Sangeet'
   desc="Shree Balaji NX is the perfect destination for your wedding celebrations. Our elegant venue offers a beautiful setting for your special day. From intimate gatherings to grand weddings, we ensure flawless service and stunning decor. We also provide Sangeet Party Halls for Events in Bhayandar West to make your event memorable."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={Contact}
   />


<Eventthree 
   title='Naming Ceremony'
   desc="Shree Balaji NX offers the perfect venue for your wedding and special events. Our spacious and elegant halls provide an ideal setting for unforgettable celebrations. With exceptional service and beautiful decor, we ensure a seamless experience. We also have Naming ceremony Party Halls for Events in Bhayandar West for your cherished moments."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={exptwo}
   />

<Eventtwo 
   title='Mehandi'
   desc="Shree Balaji NX offers the perfect venue for your Mehndi celebration. Our spacious and beautifully decorated halls provide an ideal setting for this vibrant event. With excellent service and attention to detail, your Mehndi ceremony will be unforgettable. Discover our Mehndi Party Halls for Events in Bhayandar West today!"
   button="Our Banquet"
   tolink='/banquet'
   imgsource={expthree}
   />

   <div className='container my-5' style={{color:'gray',textAlign:'justify'}}>
      <p className='lead'>
      Looking for the perfect venue for your next celebration? Shree Balaji Banquet is the premier choice among Party Halls for Events in Bhayandar West. Whether you're planning a wedding, birthday party, corporate gathering, or family reunion, our venue offers a luxurious setting that ensures your event is a resounding success. With a spacious and elegant AC hall that accommodates 75 to 250 guests, we provide the ideal atmosphere for both intimate and grand occasions. Let us make your special day truly memorable with our exceptional service and unmatched attention to detail.
      </p>
      <p className='lead'>
      As one of the most sought-after Party Halls for Events in Bhayandar West, we offer a versatile and stylish space that can be customised to suit any event type. Our banquet hall features stunning interiors, modern amenities, and a flexible layout that can easily adapt to your specific requirements. Whether you're hosting a traditional ceremony, a corporate conference, or a themed celebration, we provide the perfect ambiance to reflect your unique vision. The combination of excellent facilities and top-tier service makes us the ideal choice for any event in Bhayandar West.
      </p>
      <p className='lead'>
      At Shree Balaji Banquet, we understand that every event is unique, which is why we offer personalised services to make your occasion extraordinary. From event planning and catering to custom decor and entertainment, we take care of every detail to ensure your event is flawless. As one of the leading Party Halls for Events in Bhayandar West, our dedicated staff is committed to providing a seamless experience, allowing you to enjoy your celebration without any worries. Let us help you bring your event to life, creating lasting memories for you and your guests.      </p>

   </div>

    </>
  )
}

export default Event
