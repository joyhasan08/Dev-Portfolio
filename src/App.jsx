
import Aos from 'aos'
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
      delay: 100,
    })
  }, [])

  return (
    <>
      <Header />

      <div data-aos="fade-right" >
        <BodySection />
        <ProjectSection />
      </div>

      <AddUser data-aos="fade-left" />
      <Footer />

    </>
  )
}

export default App
