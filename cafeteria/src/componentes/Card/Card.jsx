import styles from './Card.module.css'

function Card({
    foto,
    nombre,
    descripcion
}) {
    return(
        <div className={styles.tarjeta}>
            <div className={styles.tarjetaHeader}>
                <img src={foto} alt={nombre} className={styles.tarjetaFoto}/>
                <h2 className={styles.tarjetaNombre}>{nombre}</h2>
            </div>
            <div className={styles.tarjetaContenido}>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default Card