import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "../ScrollAnimation";

export default function Contact() {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
      
    const transition = { duration: 0.5, ease: 'easeOut' };
    
    return (
    
    <section id="contact" className="w-full mt-32 px-56 py-7 flex flex-col justify-center">
    <h2 className="section-heading self-center text-sky-500 text-3xl mt-1 mb-5">
        Get in touch with me!
    </h2>
    <p className="w-3/6 my-4 textbase self-center">
        I would love to get in touch with you and connect. You can use the below platforms to interact with me, request my services or simply view my work
    </p>
    <ScrollAnimation variants={variants} transition={transition}>
    <div className="w-full flex justify-center">
        <ul className="icons flex-row justify-center mt-4">
        <a className="m-4" href="https://www.github.com/paddingtonmbata" target="norelopener">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        <a className="m-4" href="https://www.instagram.com/kanyes_favorite_grandson/" target="norelopener">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
        </a>
        <a className="m-4" href="https://www.linkedin.com/in/paddington/" target="norelopener">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>            
        <a className="m-4" href="mailto:kudambata2005@gmail.com" target="norelopener">
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
        </a>            
        </ul>
    </div>
    <div className="footer mt-16">
        <p className="text-xs text-center">
            Designed & built by Paddington <br />
            inspired by Brittany Chiang
        </p>
    </div>
    </ScrollAnimation>
    </section>
    
);
}
