import "./Contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-container">
      <h1>Contacto</h1>
      <p>¿Tienes un proyecto o necesitas una cotización? Estamos listos para ayudarte.</p>

      <div className="contacto-grid">
        {/* Info */}
        <div className="contacto-info">
          <p><strong>Teléfono:</strong> +52 667 XXX XXXX</p>
          <p><strong>Email:</strong> contacto@fraxera.com</p>
          <p><strong>Horario:</strong> Lun - Vie, 9:00 - 18:00</p>
        </div>

        {/* Formulario */}
        <form className="contacto-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
export default Contacto;