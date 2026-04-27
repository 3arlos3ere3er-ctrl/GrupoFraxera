import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>

       <img src={logo} alt="" className='logo'/>
       <ul className='menus'>
         <li><a className='nav-links' href="#inicio">Inicio</a></li>
         <li><a className='nav-links' href="#nosotros">Nosotros</a></li>
         <li><a className='nav-links' href="#galeria">Galería</a></li>
         <li><a className='nav-links' href="#proyectos">Proyectos</a></li>
         <li><a className='nav-links' href="#contacto">Contacto</a></li>
       </ul>
    </div>
  )
}

export default Navbar
