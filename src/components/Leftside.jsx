import React from 'react';
import { info, contacts, socials } from '../data/data';
const Leftside = () => {
  return (
    <div id='leftside'>
      <div className='info-container'>
        <div className='img-container'>
          <img src={info.pic} alt='selfimage' className='hero-image' />
        </div>
        <h1>{info.name}</h1>
        <p>{info.job}</p>
      </div>
      <span className='underline'></span>
      <div className='contact-container'>
        {contacts.map(({ id, icon, name, value, href }) => {
          return (
            <div key={id} className='contacts'>
              <div className='contact-icon-container'>{icon}</div>
              <div className='contact-info-container txt-aln-l'>
                {name}
                <a href={href}>{value}</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className='social-container'>
        {socials.map(({ id, href, img, alt }) => {
          return (
            <a key={id} href={href} target='_blank' rel='noopener noreferrer'>
              <img src={img} alt={alt} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Leftside;
