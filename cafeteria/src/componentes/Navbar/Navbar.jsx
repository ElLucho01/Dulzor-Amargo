import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.left}>
                    <h2>Dulce Amargor</h2>
                    <img src="../src/assets/cafe-logo.png" alt="Logo"/>
                </div>
            </Link>
            <div className={styles.right}>
            <Link to="/">
                <button className={styles.botonHeader}>Ventas</button>
            </Link>
            <Link to="/">
                <button className={styles.botonHeader}>Comience Ahora</button>
            </Link>
            </div>
        </header>
    );
}

export default Navbar