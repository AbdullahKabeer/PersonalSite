import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Patents from './components/Patents'
import Honors from './components/Honors'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Patents />
        <Honors />
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
