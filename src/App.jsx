import React from 'react';
import './App.css';
import Headers from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
      <>
      <Headers />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>

      </>
  );
}

export default App;
