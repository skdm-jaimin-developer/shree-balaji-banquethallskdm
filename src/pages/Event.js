import React from 'react'
import Eventone from './Eventone'
import Eventtwo from '../components/Eventtwo'
import Eventthree from '../components/Eventthree'
import serviceone from '../components/Imagess/serviceone.jpeg'
import carouselone from '../components/Imagess/carouselone.jpeg'
import carouseltwo from '../components/Imagess/carouseltwo.jpeg'
import connect from '../components/Imagess/connect.jpg'
import Contact from '../components/Imagess/Contact.jpeg'
import exptwo from '../components/Imagess/exptwo.jpeg'
import expthree from '../components/Imagess/expthree.jpg'

const Event = () => {
  return (
    <>
   <Eventone/>
   <Eventtwo 
   title='Wedding'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={serviceone}
   />


   <Eventthree 
   title='Birthday'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={carouselone}
   />


   <Eventtwo 
   title='Corporate Events'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={carouseltwo}
   />

   <Eventthree 
   title='Engagement'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={connect}
   />

<Eventtwo 
   title='Sangeet'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={Contact}
   />


<Eventthree 
   title='Naming Ceremony'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={exptwo}
   />

<Eventtwo 
   title='Mehandi'
   desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel doloribus obcaecati tempore sed porro numquam! Fugit perferendis voluptatibus eius, eos amet nisi repellendus porro delectus soluta ipsam saepe consectetur."
   button="Our Banquet"
   tolink='/banquet'
   imgsource={expthree}
   />

    </>
  )
}

export default Event
