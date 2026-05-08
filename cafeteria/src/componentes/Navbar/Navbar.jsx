import styles from './Navbar.module.css'

function Navbar(){
    return(
        <header className={styles.header}>
            <div className={styles.left}>
                    <h2>Cafetería Piruláctico</h2>
                    <img src="../src/assets/cafe-logo.png" alt="" srcset="" />
            </div>
            <div className={styles.right}>
                <button className={styles.botonHeader}>Ventas</button>
                <button className={styles.botonHeader}>Comience Ahora</button>
            </div>
        </header>
    );
}

export default Navbar