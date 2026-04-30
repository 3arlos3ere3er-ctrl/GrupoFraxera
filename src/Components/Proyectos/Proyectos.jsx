import { useState } from 'react';
import './Proyectos.css';

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      name: 'Caja Seca Industrial',
      type: 'Caja Seca',
      image: '/carroceria1.jpg',
      description: 'Sistema de almacenamiento hermético de última generación, diseñado para mantener condiciones óptimas de humedad y temperatura en ambientes industriales.',
      specs: [
        'Material: Acero galvanizado 2mm',
        'Dimensiones: 2.5m x 1.8m x 1.5m',
        'Capacidad: 5000 kg',
        'Sistema de ventilación inteligente',
        'Cerraduras de seguridad industrial',
        'Recubrimiento anticorrosivo'
      ]
    },
    {
      id: 2,
      name: 'Remolque de Carga',
      type: 'Remolque',
      image: '/carroceria2.jpg',
      description: 'Remolque de alta resistencia con sistemas de seguridad avanzados, ideal para transporte de carga pesada en terrenos diversos.',
      specs: [
        'Capacidad de carga: 10 toneladas',
        'Ejes de acero reforzado',
        'Sistema de frenos hidráulicos',
        'Plataforma antideslizante',
        'Luces LED de seguridad',
        'Sistema de amortiguación independiente'
      ]
    },
    {
      id: 3,
      name: 'Sistema de Distribución',
      type: 'Distribución',
      image: '/carroceria3.jpg',
      description: 'Solución integral de distribución y logística con tecnología de rastreo en tiempo real y gestión automatizada de inventario.',
      specs: [
        'Rastreo GPS en tiempo real',
        'Capacidad: 200 unidades',
        'Sistema de gestión automático',
        'Compatibilidad con múltiples formatos',
        'Reportes analíticos inteligentes',
        'Integración con sistemas ERP'
      ]
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="proyectos-title">Nuestros Proyectos</h2>
        <p className="proyectos-subtitle">Soluciones innovadoras para la industria</p>

        <div className="proyectos-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="proyecto-card"
              onClick={() => handleCardClick(project)}
            >
              <div className="proyecto-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="proyecto-image"
                />
                <div className="proyecto-overlay">
                  <p className="overlay-text">Ver detalles</p>
                </div>
              </div>
              <div className="proyecto-content">
                <h3 className="proyecto-name">{project.name}</h3>
                <p className="proyecto-type">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={handleBackdropClick}
        >
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={handleCloseModal}
              aria-label="Cerrar modal"
            >
              ×
            </button>

            <div className="modal-header">
              <h2>{selectedProject.name}</h2>
              <span className="modal-type">{selectedProject.type}</span>
            </div>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-specs">
              <h3>Especificaciones Técnicas</h3>
              <ul>
                {selectedProject.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <button
              className="modal-action-btn"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
