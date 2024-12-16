import React from 'react'
import Contactone from '../components/Contactone'
import Contactuscard from '../components/Contactuscard'

const Contact = () => {
  return (
    <div>
      <Contactone/>
      <Contactuscard title='Leave A Comment For Us'/>
      <div className='container my-5' style={{display:'none'}}>
        <p className='lead'>
        Thank you for considering Shree Balaji Banquet for your upcoming event! If you're searching for a Banquet Hall near Bhayandar West that offers luxury, elegance, and impeccable service, you've come to the right place. Our team is here to assist you in planning every detail of your event, ensuring it's a truly memorable occasion. Whether you're hosting a wedding, corporate gathering, or family celebration, we are excited to help you create the perfect experience. Get in touch with us today to book your event or to ask any questions you may have.

        </p>
        <p className='lead'>
        Looking for a Banquet Hall near Bhayandar West? Look no further. Shree Balaji Banquet is conveniently located and offers a spacious, air-conditioned venue that can accommodate 75 to 250 guests. Our professional staff is ready to assist with everything from event coordination to catering services, ensuring your celebration runs seamlessly. Whether you're looking for a venue for a wedding, party, or corporate function, we are dedicated to providing you with the best possible service. We’d love to hear from you and help bring your vision to life.

        </p>
        <p className='lead'>
        Contacting us is easy! Simply fill out the form below, or call us directly at +91 7678014775. You can also visit us at our location and see for yourself why we are the preferred Banquet Hall near Bhayandar West. Our team is available to discuss your event, provide a tour of the venue, and offer personalised recommendations. We look forward to hearing from you and helping you plan an unforgettable event.

        </p>
      </div>
    </div>
  )
}

export default Contact
