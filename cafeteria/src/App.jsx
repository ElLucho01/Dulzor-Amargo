import Navbar from './componentes/Navbar/Navbar.jsx'
import CuadrosMain from './componentes/Cuadros-Main/CuadrosMain.jsx'
import CardContainer from './componentes/CardContainer/CardContainer.jsx'
import Card from './componentes/Card/Card.jsx'
import Footer from './componentes/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <CuadrosMain />
      <CardContainer>
        
        <Card
          foto="https://via.placeholder.com/80"
          nombre="Luis San Martín"
          descripcion="Estudiante de programación y diseño web."
        />
        <Card
          foto="https://via.placeholder.com/80"
          nombre="Luis San Martín"
          descripcion="Estudiante de programación y diseño web."
        />

        <Card
          foto="https://via.placeholder.com/80"
          nombre="Luis San Martín"
          descripcion="Estudiante de programación y diseño web."
        />

      </CardContainer>
      <Footer />
    </>
  )
}

export default App
