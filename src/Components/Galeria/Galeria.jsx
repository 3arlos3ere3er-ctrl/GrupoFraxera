import { useState } from "react";
import "./Galeria.css";

function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);
  const imagenes = [
    { src: "/carroceria1.jpg", categoria: "Carrocerías" },
    { src: "/carroceria2.jpg", categoria: "Trailers" },
    { src: "/carroceria3.jpg", categoria: "Procesos" },
    { src: "/carroceria4.jpg", categoria: "Instalaciones" },
    { src: "/carroceria5.jpg", categoria: "Producto" },
    { src: "/carroceria3.jpg", categoria: "Montaje" },
    { src: "/carroceria4.jpg", categoria: "Soldadura" },
    { src: "/carroceria2.jpg", categoria: "Control de calidad" },
    { src: "/carroceria1.jpg", categoria: "Entrega" },
  ];

  const openModal = (imagen) => setSelectedImage(imagen);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="galeria" className="galeria-container">
      <h1>Galería</h1>
      <p>Conoce nuestro trabajo y procesos de fabricación.</p>

      <div className="galeria-grid">
        {imagenes.map((img, index) => (
          <div key={index} className="galeria-item" onClick={() => openModal(img)}>
            <img src={img.src} alt={img.categoria} />
            <div className="overlay">
              <span>{img.categoria}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="galeria-actions">
        <button className="galeria-button">Ver más</button>
      </div>

      {selectedImage && (
        <div className="galeria-modal" role="dialog" aria-modal="true" aria-label="Imagen ampliada" onClick={closeModal}>
          <div className="galeria-modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="galeria-modal-close" onClick={closeModal} aria-label="Cerrar modal">
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.categoria} />
            <p>{selectedImage.categoria}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Galeria;