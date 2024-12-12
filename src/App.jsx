import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, ContactShadows } from '@react-three/drei'
import Earth from './components/Earth'
import Footer from './pages/Footer'
import React from 'react'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Name from './pages/Name'
import Picture from './pages/ZachPicture'
import Landing from './pages/Landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='canvas-container'>
        <Canvas>
          <ambientLight intensity={1}/>
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset='sunset' />

        </Canvas>
      </div>

      <nav className="navbar">
        <div className="name">
          <p id='nav-name'>Zach Dubé</p>
        </div>
        <div className="nav-links">
          <a href="#landing">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section>
        <Landing/>
      </section>

      {/* REPLACED BY LANDING PAGE  
      <section id='about'>
        <div className='app-about'>
          <Name />
          <div id='row-about'>
            <Picture/>
            <About />
          </div>
        </div>
      </section> 
      */}

      <section id='projects'>
        <Projects/>
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <Footer />

    </>
  )
}

export default App
