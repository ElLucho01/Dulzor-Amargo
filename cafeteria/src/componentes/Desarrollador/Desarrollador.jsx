import styles from './Desarrollador.module.css'

function Desarrollador(){

    return(
        <>
            <main className={styles.devContainer}>

                <div className={styles.devCard}>

                    <img
                        src="../src/assets/foto-luis.jpg"
                        alt="Foto perfil"
                        className={styles.devFoto}
                    />

                    <h1 className={styles.devNombre}>
                        Luis San Martín Avendaño
                    </h1>

                    <p className={styles.devCarrera}>
                        Ingeniería Civil en Informática
                    </p>

                    <p className={styles.devCiudad}>
                        Talca, Chile
                    </p>

                    <a
                        href="https://github.com/ElLucho01"
                        target="_blank"
                        className={styles.devGithub}
                    >
                        GitHub
                    </a>

                </div>

            </main>
        </>
    );
}

export default Desarrollador

