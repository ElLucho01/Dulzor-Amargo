import Navbar from './componentes/Navbar/Navbar.jsx'
import CuadrosMain from './componentes/Cuadros-Main/CuadrosMain.jsx'
import CardContainer from './componentes/CardContainer/CardContainer.jsx'
import Card from './componentes/Card/Card.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import CardForm from './componentes/CardForm/CardForm.jsx'
import {useState} from 'react'

function Home() {
  const [cards, setCards] = useState([
    {
      foto: "https://via.placeholder.com/80",
      nombre: "Luis San Martín",
      descripcion: "Estudiante de programación y diseño web."
    }
  ]);

  function agregarCard(nuevaCard){
    setCards([...cards, nuevaCard]);
  }

  return (
    <>
      <Navbar />
      <CuadrosMain />
      <CardForm agregarCard={agregarCard} />
      <CardContainer>

        {cards.map((card, index) => (

          <Card
            key={index}
            foto={card.foto}
            nombre={card.nombre}
            descripcion={card.descripcion}
          />

        ))}

      </CardContainer>
      <Footer />
    </>
  )
}

export default Home
