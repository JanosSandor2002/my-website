import React from 'react';

const Qualification = () => {
  return (
    <section className='qualification-page' id='qualifications'>
      <h2>Tanulmanyok es celok</h2>
      <div className='qualification-timeline'>
        <article className='qualification-item'>
          <h3>Miskolci Egyetem - BSc</h3>
          <p>
            Programtervezo Informatikus alapkepzesen szereztem eros alapokat
            algoritmusok, szoftverfejlesztes es webtechnologiak teruleten.
          </p>
        </article>

        <article className='qualification-item'>
          <h3>Jatekfejlesztes - Godot Engine</h3>
          <p>
            Szabadidomben jatekfejlesztessel foglalkozom, Godotban keszitek
            jatekmechanikakat es interaktiv rendszereket.
          </p>
        </article>

        <article className='qualification-item'>
          <h3>Webfejlesztesi stack</h3>
          <p>
            Frontenden React, HTML, CSS es JavaScript, backend oldalon
            Express.js es modern webes eszkoztarak segitsegevel epitek
            projekteket.
          </p>
        </article>

        <article className='qualification-item'>
          <h3>Tovabbi tervek - MSc</h3>
          <p>
            Informatikatanar MSc kepzesben tanulok tovabb, majd a kovetkezo
            celom a matematikatanari kepzes elvegzese.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Qualification;
