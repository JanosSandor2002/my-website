import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Leftside from './components/Leftside';
import Mainside from './components/Mainside';
import Rightside from './components/Rightside';
const App = () => {
  return (
    <div className='container'>
      <Leftside />
      <Mainside />
      <Rightside />
    </div>
  );
};

export default App;

/*<Navbar />
      <Projects />
      <About />
      <Qualification />
      <Footer /> */
