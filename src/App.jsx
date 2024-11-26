import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OurSolutions from './components/OurSolutions'
import CompletedProjects from './components/CompletedProjects'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <OurSolutions />
    <CompletedProjects />
    <ContactSection />
    <Footer />
    </>
  )
}

export default App