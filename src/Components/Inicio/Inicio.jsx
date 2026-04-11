import React, { useEffect, useState } from 'react'
import './Inicio.css'

const imageSources = [
  'https://imgs.search.brave.com/iLRl8-voEhvIyvpqZz5QiTWgym8blJJbO8GTJVWBh6E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly81MDA4/NDUuZnMxLmh1YnNw/b3R1c2VyY29udGVu/dC1uYTEubmV0L2h1/YmZzLzUwMDg0NS9j/aGFzaXMtY29jaGUu/anBn',
  'https://imgs.search.brave.com/R_qspku2DWW-2JBFmzXBWE2SdyVQDFPOKiG3RDpU8GE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/NzEwNDgxMy9lcy9m/b3RvL2dyYW4tZXNw/YWNpby1kZS1hbG1h/YyVDMyVBOW4tdmFj/JUMzJUFEby1pbmR1/c3RyaWFsLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IT3k3/X3I5X1k1dHRQQjQ5/dURYbEM4TUZ6TFph/d0NxWVAtYkZaZ1k1/R1hvPQ',
  'https://imgs.search.brave.com/AW-Da8hZemme-jskbdg_AerhhoKnz89M9KZK4pxLrq8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/NjY2LzkyNi9zbWFs/bC90cnVjay1pcy1k/cml2aW5nLWRvd24t/aGlnaHdheS1sYXJn/ZS10cmFpbGVyLW9u/LXRyYWNrLXRyYW5z/cG9ydGF0aW9uLW9m/LWdvb2RzLWluLXN1/bW1lci1hd25pbmct/b24tYm9keS1waG90/by5qcGc',
]

const Inicio = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % imageSources.length)
    }, 8500)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="hero" aria-label="Hero institucional Grupo Fraxera">
      <div className="hero-content">
        <span className="hero-eyebrow">Soluciones industriales para transporte de carga</span>
        <h1>Fabricamos carrocerías y cajas de tráiler con calidad y precisión</h1>
        <p>
          En Grupo Fraxera nos especializamos en el ensamble y fabricación de estructuras para transporte,
          ofreciendo productos resistentes, funcionales y adaptados a las necesidades de cada cliente.
        </p>
        <div className="hero-actions">
          <button type="button" className="hero-button button-proyectos">
            Ver proyectos
          </button>
          <button type="button" className="hero-button button-contacto">
            Contactar
          </button>
        </div>
      </div>

      <div className="hero-image-panel">
        <div className="hero-image-stack">
          {imageSources.map((src, index) => (
            <div
              key={src}
              className={`hero-image-slide ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>
        <div className="hero-image-overlay" />
      </div>
    </section>
  )
}

export default Inicio
