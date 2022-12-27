import { FaFacebook, FaInstagram } from "react-icons/fa";


const Contactcomp = () => {
  return <div className="Contact-comp">
      <div className="left">
        <div className="left">
          <p>Kontakt: 000 000 000</p>
          <p>E-mail: testowy.email@onet.pl</p>
          <p>Adres: kolorowa 69 Brzeg dolny</p>
        </div>
        <div className="right">
          <p>Sprawdź social media</p>
          <ul className="icons-list">
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook /> 
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram /> 
              </a>
            </li>
          </ul>  
        </div>
      </div>
      <div className="google-map-con">
        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.0027772782293!2d16.730895287070517!3d51.27391010364502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f9086c06d1cb9%3A0xe511e230fe3c5102!2sHotel%20i%20Restauracja%20Stara%20Sto%C5%82%C3%B3wka!5e0!3m2!1spl!2spl!4v1671912589806!5m2!1spl!2spl" width="500" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
}

export default Contactcomp;


