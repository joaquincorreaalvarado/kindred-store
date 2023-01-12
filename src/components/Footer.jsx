import React from "react";


const Footer = () => {

    return(
        <footer className="endPage animate__animated animate__lightSpeedInRight">
        
        <div className="empty"></div>
        <div className="informaciónUtil">
          <h3>Información útil</h3>
            <ul>
              <li>
                <a href="/" className="linksFooter">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="/" className="linksFooter">Formas de Pago</a>
              </li>
              <li>
                <a href="/" className="linksFooter">Terminos y Condiciones</a>
              </li>
              <li>
                <a href="/" className="linksFooter">Botón Arrepentimiento</a>
              </li>
          </ul>
        </div> 
                
        <div className="contacto">
          <h3>Contáctanos</h3>
            <ul>
            <li>
              <h5>4523-8466</h5>
            </li>
            <li>
              <h5>Sanchez de Bustamante 752 Almagro CABA</h5>
            </li>
            <li>
              <h5>Lunes a Sábado de 10 a 18hs</h5>
            </li>
            <li>
              <h5>Por consultas o reclamos ir a contacto</h5>
            </li>
          </ul>
        </div> 
        
        <div className="redes">
          <h3>Redes</h3>
          <ul className="mediaFlex">
            <li className="instagram">
              <a href="/">
                <img src={"/images/Instagram.png"} alt="Instagram" className="instagram"/>
              </a>
            </li>
            <li className="facebook">
              <a href="/">
                <img src={"/images/Facebook.png"} alt="Facebook" className="facebook" href="/"/>
              </a>
            </li>
            <li className="youtube">
              <a href="/">
                <img src={"/images/Youtube.png"} alt="Youtube" className="youtube"/>
              </a>
            </li>
        </ul>
        </div>
          
        <h2 className="copyright">Copyright Kindred Store - 2022. Todos los derechos reservados.
        Defensa de las y los consumidores.</h2>
    </footer>
    )




}

export default Footer;