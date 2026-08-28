import React from 'react';
import { technologies } from '../data/technologies';

const levelToPercent = {
  Tanulandó: 5,
  Kezdő: 25,
  Junior: 45,
  Haladó: 68,
  Medior: 82,
  Senior: 95,
};

const TechSection = ({ title, subtitle, items }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div>
      <h2 style={{ marginBottom: '4px' }}>{title}</h2>
      {subtitle && <p className='projects-intro'>{subtitle}</p>}
    </div>
    <div className='tech-grid'>
      {items.map((t) => (
        <div key={t.id} className='tech-card'>
          <div className='tech-card-name'>{t.technology}</div>
          <div className='tech-card-level'>{t.level}</div>
          <div className='tech-bar'>
            <div
              className='tech-bar-fill'
              style={{ width: `${levelToPercent[t.level] ?? 5}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Qualification = () => {
  return (
    <section className='qualification-page' id='kepesitesek'>
      <h2>Tanulmányok és célok</h2>

      <div className='qualification-timeline'>
        <article className='qualification-item'>
          <div className='qual-date'>2021 – 2025</div>
          <h3>Miskolci Egyetem – BSc, Programtervező Informatikus</h3>
          <p>
            Az alapképzésen szilárd alapokat szereztem algoritmusok,
            szoftverfejlesztés és webtechnológiák terén. A szakdolgozat React,
            React Native és Express.js technológiákkal készült, teljes körű
            projektmenedzsment szoftverként.
          </p>
        </article>

        <article className='qualification-item'>
          <div className='qual-date'>2025 –</div>
          <h3>Informatikatanár MSc</h3>
          <p>
            Az MSc képzésen az elméleti tudást pedagógiai szemlélettel egészítem
            ki. Célom a következő generáció felkészítése programozásra és az
            informatika alapjaira — miközben saját szakmai fejlődésemet is
            folytatom.
          </p>
        </article>

        <article className='qualification-item'>
          <div className='qual-date'>Folyamatban</div>
          <h3>Játékfejlesztés – Godot Engine</h3>
          <p>
            Szabadidőmben játékfejlesztéssel foglalkozom. A Godot Engine-ben
            játékmechanikákat és interaktív rendszereket tervezek és valósítok
            meg.
          </p>
        </article>

        <article className='qualification-item'>
          <div className='qual-date'>Jövőbeli terv</div>
          <h3>Matematikatanári képzés</h3>
          <p>
            Az informatikatanári MSc után a matematikatanári képzés elvégzése a
            célom, hogy interdiszciplináris szemlélettel oktathassak — ötvözve a
            logikai gondolkodást és a programozást.
          </p>
        </article>
      </div>

      {/* ── Webes fejlesztői stack ── */}
      <TechSection
        title='Webes alaptechnológiák'
        subtitle='HTML, CSS, JavaScript és TypeScript — a frontend alapjai.'
        items={technologies.web}
      />

      <TechSection
        title='Keretrendszerek és könyvtárak'
        subtitle='React ökoszisztéma, backend eszközök és egyéb webes keretrendszerek.'
        items={technologies.frameworks}
      />

      <TechSection
        title='React Hooks'
        subtitle='Összetett állapotkezelés és egyéni hook-ok.'
        items={technologies.hooks}
      />

      <TechSection
        title='UI és dizájn'
        subtitle='Vizuális tervezés, CSS keretrendszerek és prototípus-készítés.'
        items={technologies.ui}
      />

      {/* ── Játékfejlesztői stack ── */}
      <TechSection
        title='Játékfejlesztői stack'
        subtitle='Godot Engine alapú 2D játékfejlesztés — mechanikák, animációk és pályatervezés.'
        items={technologies.gamedev}
      />

      {/* ── Tanári stack ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <h2 style={{ marginBottom: '4px' }}>Tanári stack</h2>
          <p className='projects-intro'>
            Korrepetálási tapasztalattal rendelkezem informatikából és
            matematikából (ezek az elsődleges szakterületeim), valamint angol és
            történelem tantárgyakból. Rendes tanárként még nem dolgoztam, de az
            MSc képzés erre is felkészít.
          </p>
        </div>
        <div className='tech-grid'>
          {technologies.teaching.map((t) => (
            <div key={t.id} className='tech-card'>
              <div className='tech-card-name'>{t.technology}</div>
              <div className='tech-card-level'>{t.level}</div>
              <div style={{ marginTop: '4px', marginBottom: '6px' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--secondary)',
                    opacity: 0.65,
                    fontStyle: 'italic',
                  }}
                >
                  {t.time}
                </span>
              </div>
              <div className='tech-bar'>
                <div
                  className='tech-bar-fill'
                  style={{ width: `${levelToPercent[t.level] ?? 5}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '0.78rem',
            color: 'rgba(232,244,248,0.5)',
            fontStyle: 'italic',
            marginTop: '-4px',
          }}
        >
          * A tanári tapasztalat jelenleg korrepetálás szintű. Osztálytermi
          oktatási tapasztalat az MSc képzés keretében fog bővülni.
        </p>
      </div>
    </section>
  );
};

export default Qualification;
