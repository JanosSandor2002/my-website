import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Qualification from './components/Qualification';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Projects />
      <About />
      <Qualification />
      <Footer />
    </div>
  );
};

export default App;
