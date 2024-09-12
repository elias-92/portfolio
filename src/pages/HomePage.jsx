import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Technologies from '../components/Technologies'
import Contact from '../components/Contact'
import About from '../components/About'
import Projects from '../components/Projects'
import Education from '../components/Education'
import PersonalProjects from '../components/PersonalProjects'

const HomePage = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Home />
      <About />
      <Projects />
      <PersonalProjects />
      <Technologies />
      <Education />
      <Contact />
    </>
  )
}

export default HomePage
