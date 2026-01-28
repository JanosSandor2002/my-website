import React from 'react';
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
