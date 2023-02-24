import React from 'react'
import ServicesCarousel from './ServicesCarousel'

const WhatWeDo = () => {
  return (
    <div id='whatwedo' className='services'>
      <h1>Nuestros clientes</h1>
      <div className='container'>
        <div className='services-content'>
          <ServicesCarousel />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo