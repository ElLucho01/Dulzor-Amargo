import styles from './CuadrosMain.module.css'
import { FaUniversity } from 'react-icons/fa'

function CuadrosMain(){
    return(
        <div className={styles.mainCuadros}>
                <div className={styles.imgSup}>
                    <img className={styles.imagen} src="../src/assets/cafeteria-interior.jpg" alt="" />
                </div>
                <div className={styles.textSup}>
                    <h2>
                        <FaUniversity />
                        Dulce Amargor
                    </h2>
                    <p>
                        Bienvenido a la cafetería Dulce Amargor!
                        Esperamos que disfrutes tu visita
                    </p>
                    <button>
                        <a href="#">
                            Nuestro Menú
                        </a>
                    </button>
                </div>
                    <div className={styles.cuadroMapa}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.0027011543684!2d-71.62160542336673!3d-35.429963101604216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c7002df0956b%3A0xfc30efbca05e2594!2sLa%20Cafeter%C3%ADa%20Las%20Rastras!5e0!3m2!1ses!2scl!4v1778271290457!5m2!1ses!2scl"
                        width="100%"
                        height="90%"
                        >
                            
                        </iframe>
                    </div>
                    <div className={styles.textInf}>
                        <h2>
                            Nuestra Historia
                        </h2>
                        <p>
                            Somos una cafetería ubicada en la ciudad de Talca, que ofrece el mejor servicio de la zona.
                            Nuestro café está hecho con grano recién molido y nuestra pastelería es fresca y hecha en casa.
                        </p>
                    </div>
        </div>
    )
}
export default CuadrosMain