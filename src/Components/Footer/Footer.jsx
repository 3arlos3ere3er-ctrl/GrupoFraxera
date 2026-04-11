import React from "react";
import logo from '../../assets/logo.png'
import './Footer.css'
const Footer = () => {
    return( 
        <div className="footer-container">
            <a className="footer-link"        
            >
                
                <ul className="columnas-footer">
                    <li className="footer-direccion">
                        <img src={logo} className="footer-logo"/>
                        <p>Privada Piggyback</p>
                        <p>Campo "El Diez", 80300</p>
                        <p>Culiacán, Sinaloa, México.</p>
                        <p>667 137 8170</p>
                    </li>
                    <li className="footer-menu">
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Galería</p>
                        <p>Proyectos</p>
                        <p>Contacto</p>
                    </li>
                    <li className="footer-enlace-facebook">
                        **Poner icono de facebook que redireccione a la pagina de facebook de la empresa
                    </li>
                </ul>
                <li className='footer-derechos'>© 2024 Grupo Fraxera. Todos los derechos reservados.</li>
            </a>
        </div>
    );
}
export default Footer;