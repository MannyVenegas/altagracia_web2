import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src={logo} className='logo' alt="logo"/>
        </a>
        <button className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                  <FontAwesomeIcon icon={faBars} style={{color: 'black'}} />

        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <Link smooth={true} to="home" className='nav-link' href='#'>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Quiénes somos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="whatwedo"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Nuestros clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="clients"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav