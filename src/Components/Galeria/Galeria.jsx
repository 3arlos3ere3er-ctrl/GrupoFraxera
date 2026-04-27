import "./Galeria.css";

function Galeria() {
  const imagenes = [
    { src: "/img/galeria1.jpg", categoria: "Carrocerias" },
    { src: "/img/galeria2.jpg", categoria: "Trailers" },
    { src: "/img/galeria3.jpg", categoria: "Procesos" },
    { src: "/img/galeria4.jpg", categoria: "Instalaciones" },
    { src: "/img/galeria5.jpg", categoria: "Producto" },
  ];

  return (
    <section id="galeria" className="galeria-container">
      <h1>Galería</h1>
      <p>Conoce nuestro trabajo y procesos de fabricación.</p>

      <div className="galeria-grid">
        {imagenes.map((img, index) => (
          <div key={index} className="galeria-item">
            <img src={img.src} alt={img.categoria} />
            <div className="overlay">
              <span>{img.categoria}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;