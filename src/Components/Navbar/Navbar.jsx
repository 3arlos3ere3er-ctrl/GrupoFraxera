import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>

       <img src={logo} alt="" className='logo'/>
       <ul>
         <li>Inicio</li>
         <li>Nosotros</li>
         <li>Galería</li>
         <li>Proyectos</li>
         <li>Contacto</li>
       </ul>
    </div>
  )
}

export default Navbar
