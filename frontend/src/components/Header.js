import React from 'react'
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
      <div className='main-info'>      
        <h1>Dulces momentos llevados hasta tí.</h1>
        <p>Eventos, coffe break, cafetería y más.</p>
        <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contáctanos</Link>
      </div>
    </div>
  )
}

export default Header