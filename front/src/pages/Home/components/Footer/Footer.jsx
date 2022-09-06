
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import lotoFoot from "../../assets/title-foot.svg"
import whatsapp from "../../assets/whatsapp.svg"
import email from "../../assets/email.svg"
import "./footer.css"


function Footer() {
  return (
    <div className="App">

      <div className='footer'>

        <div className='content-footer'>

          <img className='logo-foot' src={lotoFoot} alt="Logo valtech" />
          <p className='parraf-footer'>Conocé nuestra historia</p>
          <p className='parraf-footer'>Próposito V_camp</p>
          <p className='parraf-footer'>Ingresá a tu portal</p>

        </div>


        <div className='content-footer'>

          <span className='title-foot'>Programas</span>
          <p className='parraf-footer'>Orientación vocacional</p>
          <p className='parraf-footer'>Re-orientación vocacional</p>
          <p className='parraf-footer'>Taller de Matemáticas</p>
          <p className='parraf-footer'>Método de estudio</p>
          <p className='parraf-footer'>Taller de autoconfianza</p>

        </div>


        <div className='content-footer'>
          
          <span className='title-foot'>Contactos</span>

          <div className='contacto'>
            <img className='emoji-contact' src={email} alt="email" />
            <p className='parraf-footer'>consultas@vcamp.com</p>
          </div>

          <div className='contacto'>
            <img className='emoji-contact' src={whatsapp} alt="whatsapp" />
            <p className='parraf-footer'>11 5 6788 2355</p>
          </div>


          <div className='cont-emoji'>
            <div className='emoji-foot'>

            <a href="https://www.facebook.com/people/Valtech-Digital-Argentina/100066766578674/"> <img className='emoji' src={facebook}></img> </a>
            </div>
          
            <div className='emoji-foot'>
            <a href="https://www.instagram.com/valtech_argentina/?hl=es"> <img className='emoji' src={instagram}></img> </a>
            </div>
          
            <div className='emoji-foot'>
            <a href="https://ar.linkedin.com/company/valtech"> <img className='emoji' src={linkedin}></img> </a>
            </div>


          </div>

        </div>

      </div>

    </div>
  );
}

export default Footer;
