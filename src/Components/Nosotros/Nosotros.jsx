import React from 'react';
import './Nosotros.css';

function Nosotros() {
  return (
    <div id="nosotros" className="nosotros-container">
      <h1>Nosotros</h1>

      <section className="nosotros-section">
        <h2>Nuestra empresa</h2>
        <p>
          Grupo Fraxera es una empresa especializada en el ensamble de carrocerías y la fabricación de cajas para tráiler, operando en el sector industrial desde hace más de una década. Nos dedicamos a proporcionar soluciones técnicas para el transporte de carga, trabajando con clientes en sectores como logística, construcción y agricultura.
        </p>
        <p>
          Nuestra trayectoria se basa en la evolución constante de procesos, adaptándonos a las demandas del mercado industrial y manteniendo un enfoque en la eficiencia operativa.
        </p>
      </section>

      <section className="nosotros-section">
        <h2>¿Qué hacemos?</h2>
        <p>Ofrecemos servicios especializados en el ensamble y fabricación de componentes para vehículos de transporte pesado:</p>
        <ul>
          <li>Ensamble de carrocerías: Montaje preciso de estructuras metálicas y componentes para tráiler, asegurando compatibilidad con estándares técnicos.</li>
          <li>Fabricación de cajas para tráiler: Producción de cajas personalizadas en acero y aluminio, optimizadas para diferentes tipos de carga y condiciones de uso.</li>
          <li>Soluciones a medida: Adaptaciones técnicas, como refuerzos estructurales o modificaciones para cargas específicas, basadas en requerimientos del cliente.</li>
        </ul>
      </section>

      <section className="nosotros-section">
        <h2>Capacidad operativa</h2>
        <p>
          Contamos con instalaciones industriales equipadas con maquinaria especializada para corte, soldadura y ensamble de metales. Nuestro equipo incluye técnicos certificados en procesos de fabricación y control de calidad, con experiencia en normas ISO para asegurar consistencia en cada proyecto.
        </p>
        <p>
          Operamos con flujos de trabajo optimizados que permiten entregas puntuales y escalables, respaldados por un sistema de gestión que prioriza la precisión y la seguridad.
        </p>
      </section>

      <section className="nosotros-section">
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li>Durabilidad comprobada: Nuestros productos resisten condiciones extremas de carga y desgaste, reduciendo costos de mantenimiento a largo plazo.</li>
          <li>Cumplimiento normativo: Garantizamos adhesión a regulaciones técnicas y de seguridad, minimizando riesgos operativos para el cliente.</li>
          <li>Personalización técnica: Desarrollamos soluciones específicas para cada necesidad, integrando feedback del cliente en el diseño.</li>
          <li>Eficiencia en entregas: Procesos optimizados que permiten tiempos de respuesta competitivos sin comprometer la calidad.</li>
        </ul>
      </section>

      <section className="mision-vision-section">
        <div className="mision-vision-container">
          <div className="mision-block">
            <h2>Misión</h2>
            <p>Proporcionar soluciones técnicas confiables en ensamble de carrocerías y fabricación de cajas para tráiler, apoyando la eficiencia operativa de nuestros clientes industriales.</p>
          </div>
          <div className="vision-block">
            <h2>Visión</h2>
            <p>Ser un referente en fabricación industrial especializada, impulsando innovación técnica para el sector del transporte de carga.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;