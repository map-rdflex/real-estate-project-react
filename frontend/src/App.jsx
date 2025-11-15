import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import Team from './components/Team';
import About from './components/About';
import News from './components/News';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <WhatMakesUsDifferent />
      <Team />
      <About />
      <News />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
