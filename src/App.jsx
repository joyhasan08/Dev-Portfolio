
import Aos from 'aos'
import "aos/dist/aos.css"
import './App.css'
import AddUser from './Components/AddUser/AddUser'
import BodySection from './Section/BodySection'
import Footer from './Section/Footer'
import Header from './Section/Header'
import ProjectSection from './Section/ProjectSection'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out-sine',
      delay: 1000,
    })
  }, [])

  return (
    <>
      <Header />

      <div data-aos="fade-right" >
        <BodySection />
      </div>
      <ProjectSection />
      <div data-aos="fade-right">
        <AddUser />
      </div>

      <Footer />

    </>
  )
}

export default App
