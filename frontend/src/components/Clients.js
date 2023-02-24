import React from 'react';
import img from '../cafe.jpg'
import img2 from '../party.jpg'
import img3 from '../cafeteria.jpg'
import img4 from '../copas.jpg'

const Clients = () => {
  return (
    <>
    <h1 className='clients-title'>Nuestros servicios</h1>
    <section className='clients-container'>
      <div className='clients c1'>
        <img alt='icon' src={img}/>
        <h3>Coffee Break</h3>
        <p>Fusce hendrerit malesuadnia. Donec semper semper sem vitae malesuada.a laci</p>
      </div>
      <div className='clients c2'>
        <img alt='icon' src={img3}/>
        <h2>Cafetería</h2>
        <p>Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada.</p>
      </div>
      <div className='clients c3'>
        <img alt='icon' src={img4}/>
        <h2>Eventos</h2>
        <p>Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada.</p>
      </div>
      <div className='clients c4'>
        <img alt='icon' src={img2}/>
        <h2>Montajes</h2>
        <p>Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada.</p>
      </div>
    </section>
    </>
  )
}

export default Clients