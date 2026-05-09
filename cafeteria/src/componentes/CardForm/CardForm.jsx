import { useState } from 'react'

import styles from './CardForm.module.css'

function CardForm({ agregarCard }) {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    function manejarSubmit(e){
        e.preventDefault();

        const nuevaCard = {
            foto: "https://via.placeholder.com/80",
            nombre: nombre,
            descripcion: descripcion
        };

        agregarCard(nuevaCard);

        setNombre("");
        setDescripcion("");
    }

    return(
        <div className={styles.formContainer}>

            <form
                className={styles.cardForm}
                onSubmit={manejarSubmit}
            >

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <textarea
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <button type="submit">
                    Crear Card
                </button>

            </form>

        </div>
    );
}

export default CardForm