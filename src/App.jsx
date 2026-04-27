import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Inicio from './Components/Inicio/Inicio'
import Nosotros from './Components/Nosotros/Nosotros'
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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
