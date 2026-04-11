import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Inicio from './Components/Inicio/Inicio'

const App = () => {
  return (
    <div className='container'>
      {/* Navbar */}
      <Navbar />

      {/* Inicio */}
      <Inicio />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
