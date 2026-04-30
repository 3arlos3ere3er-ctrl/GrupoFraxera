import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Inicio from './Components/Inicio/Inicio'
import Nosotros from './Components/Nosotros/Nosotros'
import Proyectos from './Components/Proyectos/Proyectos'
import Galeria from './Components/Galeria/Galeria'
import Contacto from './Components/Contacto/Contacto'

const App = () => {
  return (
    <div className='container'>
      {/* Navbar */}
      <Navbar />

      {/* Inicio */}
      <Inicio />

      {/* Nosotros */}
      <Nosotros />

      {/* Galería */}
      <Galeria />

      {/* Proyectos */}
      <Proyectos />

      {/* Contacto */}
      <Contacto />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
