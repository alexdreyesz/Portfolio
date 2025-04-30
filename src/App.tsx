import Header from './components/Header'
import Home from './components/sections/home/Home'
import About from './components/sections/about/About'
import Career from './components/sections/career/Career'
import Projects from './components/sections/projects/Projects'
import Footer from './components/Footer'
import CanvasBackground from "./components/common/background/CanvasBackground";


function App() {
  return (
    <div className="bg-black">
      {/*<CanvasBackground/>*/}
      <Header/>
      <main className="overflow-hidden">
        <Home/>
        <About/>
        <Career/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  )
}

export default App