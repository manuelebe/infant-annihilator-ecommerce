import NavBar from "./components/NavBar/NavBar"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Contador from "./components/ItemListContainer/Contador"
import Background from "./components/Background/Background"

function App() {
  return (
    <div>
      <Background/>
      <NavBar/>
      <ItemListContainer saludo={"Hola Mundo!"}/>
      <Contador/>
    </div>
  )
}

export default App
