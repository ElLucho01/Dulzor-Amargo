import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <div className={styles.sup}>
                <div className={styles.redes}>
                    <a href="https://x.com/StarbuckChile">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com/starbucks">
                        <FaYoutube />
                    </a>
                    <a href="https://cl.linkedin.com/company/starbucks-coffe-chile">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/starbuckschile/">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/StarbucksChile/?locale=es_LA">
                        <FaFacebook />
                    </a>
                    <a href="https://www.tiktok.com/@starbucks">
                        <FaTiktok />
                    </a>
                </div>
            <a href="#">Desarrollador</a>
        </div>
        <p>Talca, {new Date().getFullYear()} </p>
        </footer>
    );
}

export default Footer