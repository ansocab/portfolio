import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export default function ContactButtons() {

    function handleMail() {
        window.open('mailto:ana.caballero@gmx.de')
      }

    return (
        <div className="justify-content-md-center intro-button-icons">
             <a className="mr-4" href="https://github.com/ansocab" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
             <a className="mr-4" href="https://www.linkedin.com/in/ana-sofia-caballero/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
             <button onClick={handleMail} id="mail-button"><FontAwesomeIcon icon={faEnvelope} /></button>
        </div>
    )
}