import landingPhoto from '../assets/img/contact-landing.png'
import Landing from "../components/Landing"
import Contactcomp from '../components/Contactcomp'

const description = "to jeset opis strony lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"

function Contact() {
  return <div className="Contact">
  <Landing image={landingPhoto} header={"Kontakt"} description={description}/>
  <Contactcomp/>
</div>
}

export default Contact