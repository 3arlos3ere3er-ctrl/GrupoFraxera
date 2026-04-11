import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>

       <img src={logo} alt="" className='logo'/>
       <ul className='menus'>
         <li className='nav-links'>Inicio</li>
         <li className='nav-links'>Nosotros</li>
         <li className='nav-links'>Galería</li>
         <li className='nav-links'>Proyectos</li>
         <li className='nav-links'>Contacto</li>
       </ul>
    </div>
  )
}

export default Navbar
