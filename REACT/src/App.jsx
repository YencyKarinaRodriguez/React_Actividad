import Message from "./components/Message"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  
  return (
    <>
    <h1>Hola</h1>
    <Message text="Desde un boton" />
    <Counter text="El valor es "/>
    <Footer text="Footer"/>
    <Header text="Header"/>
    <Main text="Main"/>
    </>
  )
}

export default App