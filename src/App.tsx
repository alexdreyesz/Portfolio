import Header from './components/Header'
import Home from './components/sections/home/Home'
import Footer from './components/Footer'
import CanvasBackground from "./components/common/background/CanvasBackground";


function App() {
  return (
    <main className=" overflow-hidden">
      <CanvasBackground/>
      <Header/>
      <div>
        <Home/>
      </div>
      <Footer/>
    </main>
  )
}

export default App