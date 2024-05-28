import React from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Extra from './components/Extra';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage imageSrc="/landing3.avif" />
      <About />
      <Education />
      <Experience />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
