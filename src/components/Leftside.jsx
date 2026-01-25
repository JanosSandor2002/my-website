import React from 'react';
import { info } from '../data/data';
const Leftside = () => {
  return (
    <div id='leftside'>
      <div className='img-container'>
        <img src={info.pic} alt='selfimage' className='hero-image' />
      </div>
      <h1>{info.name}</h1>
      <p>{info.job}</p>
    </div>
  );
};

export default Leftside;
