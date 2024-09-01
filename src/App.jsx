
import Aos from 'aos'
import "aos/dist/aos.css"
import './App.css'
import AddUser from './Components/AddUser/AddUser'
import BodySection from './Section/BodySection'
import Footer from './Section/Footer'
import Header from './Section/Header'
import ProjectSection from './Section/ProjectSection'
import { useEffect } from 'react'
import AboutMe from './Components/About/AboutMe'

function App() {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-out-sine',
      delay: 100,
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
        {/* <AboutMe /> */}
        <AddUser />
      </div>

      <Footer />

    </>
  )
}

export default App
