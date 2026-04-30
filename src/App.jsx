import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Inicio from './Components/Inicio/Inicio'
import Nosotros from './Components/Nosotros/Nosotros'
import Proyectos from './Components/Proyectos/Proyectos'
import Galeria from './Components/Galeria/Galeria'

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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
