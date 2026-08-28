import React from 'react';
import { info } from '../data/personal';
import { technologies } from '../data/technologies';
import { javascript_projects } from '../data/projects/javascript';
import { university_projects } from '../data/projects/university';
import { java_projects } from '../data/projects/java';
import { godot_projects } from '../data/projects/godot';
import { practice_projects } from '../data/projects/practice';

const MainMenu = () => {
  const featuredProjects = [
    ...javascript_projects,
    ...university_projects,
    ...java_projects,
    ...godot_projects,
    ...practice_projects,
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const prevProject = () =>
    setActiveIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1,
    );

  const nextProject = () =>
    setActiveIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1,
    );

  const getByOffset = (offset) =>
    featuredProjects[
      (activeIndex + offset + featuredProjects.length) % featuredProjects.length
    ];

  const center = getByOffset(0);
  const left = getByOffset(-1);
  const right = getByOffset(1);

  /* Aktív technológiák: minden kategóriából, Tanulandó nélkül */
  const activeTechs = [
    ...technologies.web,
    ...technologies.frameworks,
    ...technologies.hooks,
    ...technologies.ui,
  ].filter((t) => t.level !== 'Tanulandó');

  return (
    <section className='landing-page'>
      {/* ── Hero ── */}
      <div className='landing-hero'>
        <p className='landing-tag'>Portfólió</p>
        <h2>{info.name}</h2>
        <p className='landing-subtitle'>
          Informatikus hallgatóként webes rendszereket és játékokat fejlesztek.
          Célom letisztult, megbízható és felhasználóbarát megoldásokat
          készíteni valós problémákra — a kódminőség és a vizuális élmény
          egyaránt fontos.
        </p>
      </div>

      {/* ── Stat sáv ── */}
      <div className='stat-strip'>
        <div className='stat-item'>
          <div className='stat-num'>{featuredProjects.length}</div>
          <div className='stat-label'>Projekt</div>
        </div>
        <div className='stat-item'>
          <div className='stat-num'>{activeTechs.length}+</div>
          <div className='stat-label'>Technológia</div>
        </div>
        <div className='stat-item'>
          <div className='stat-num'>3.</div>
          <div className='stat-label'>Év, BSc</div>
        </div>
        <div className='stat-item'>
          <div className='stat-num'>∞</div>
          <div className='stat-label'>Kíváncsiság</div>
        </div>
      </div>

      {/* ── Bemutatkozó kártyák ── */}
      <div className='landing-grid landing-grid-2'>
        <article className='landing-card landing-card-highlight'>
          <h3>Miért különleges ez a portfólió?</h3>
          <p>
            Nem csupán kész projektek láthatók itt, hanem az a gondolkodásmód
            is, ahogyan egy ötletből működő termék lesz. A hangsúly a letisztult
            UI-n, a jó felhasználói élményen és az átlátható kódszerkezeten van.
          </p>
        </article>
        <article className='landing-card'>
          <h3>Technológia és kreativitás</h3>
          <p>
            A webes stack mellett Godot Engine-ben is fejlesztek. Ez a két világ
            együtt adja azt a szemléletet, ahol az interaktivitás, a vizuális
            minőség és a teljesítmény egyaránt fontos.
          </p>
        </article>
      </div>

      {/* ── Karuszel ── */}
      <section className='landing-showcase'>
        <div className='showcase-head'>
          <h3>Kiemelt projektek</h3>
          <p>
            Nyilakkal lapozhatod a projekteket. A középső kártyán a képre
            kattintva megnyílik az oldal.
          </p>
        </div>
        <div className='showcase-carousel'>
          <button
            className='showcase-nav-btn'
            onClick={prevProject}
            aria-label='Előző projekt'
          >
            ‹
          </button>

          <article
            className='showcase-card showcase-card-side'
            onClick={prevProject}
          >
            <img src={left.project_img} alt={left.project_name} />
            <h4>{left.project_name}</h4>
          </article>

          <article className='showcase-card showcase-card-active'>
            <a
              href={center.link}
              target='_blank'
              rel='noopener noreferrer'
              className='showcase-link'
            >
              <img src={center.project_img} alt={center.project_name} />
            </a>
            <h4>{center.project_name}</h4>
            <p>{center.project_details}</p>
          </article>

          <article
            className='showcase-card showcase-card-side'
            onClick={nextProject}
          >
            <img src={right.project_img} alt={right.project_name} />
            <h4>{right.project_name}</h4>
          </article>

          <button
            className='showcase-nav-btn'
            onClick={nextProject}
            aria-label='Következő projekt'
          >
            ›
          </button>
        </div>
      </section>

      {/* ── Aktív technológiák + Tanulmányi út ── */}
      <div className='landing-grid landing-grid-2'>
        <article className='landing-card'>
          <h3>Aktív technológiák</h3>
          <p
            style={{
              marginBottom: '10px',
              fontSize: '0.83rem',
              color: 'rgba(232,244,248,0.62)',
            }}
          >
            Amelyekkel rendszeresen dolgozom vagy aktívan tanulom.
          </p>
          <div className='tech-dots'>
            {activeTechs.map((t) => (
              <span key={t.id} className='tech-dot'>
                {t.technology}
              </span>
            ))}
          </div>
        </article>

        <article className='landing-card'>
          <h3>Tanulmányi út</h3>
          <p>
            Encsi Vásárhelyi Pál Gimnázium (5 éves nyelvi tagozat) → Miskolci
            Egyetem, Programtervező Informatikus BSc → Informatikatanár MSc →{' '}
            Matematikatanári képzés.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MainMenu;
