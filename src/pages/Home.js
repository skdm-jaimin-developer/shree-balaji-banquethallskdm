import React from 'react'


import Ourservices from '../components/Ourservices'
import Wcu from '../components/Wcu'

import Carousel from '../components/Carousel'
import Carouselhero from '../components/Carouselhero'
import Servicelist from '../components/Servicelist'
import Pde from '../components/Pde'
import Expertise from '../components/Expertise'
import Connect from '../components/Connect'
import Eventshome from '../components/Eventshome'



const Home = () => {

  return (
    <div>
      <Carouselhero/>
      <Ourservices/>
      <Servicelist/>
      <Pde/>
      <Wcu/>
      <Carousel/>
      <Eventshome/>
      <Expertise/>
      <Connect/>
    </div>
  )
}

export default Home
