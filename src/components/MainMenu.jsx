import React from 'react';
import { info, websites, university } from '../data/data';

const MainMenu = () => {
  const featuredProjects = [...websites, ...university];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1,
    );
  };

  const nextProject = () => {
    setActiveIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1,
    );
  };

  const getProjectByOffset = (offset) => {
    const index =
      (activeIndex + offset + featuredProjects.length) % featuredProjects.length;
    return featuredProjects[index];
  };

  const centerProject = getProjectByOffset(0);
  const leftProject = getProjectByOffset(-1);
  const rightProject = getProjectByOffset(1);

  return (
    <section className='landing-page'>
      <div className='landing-hero'>
        <p className='landing-tag'>Portfolio</p>
        <h2>{info.name}</h2>
        <p className='landing-subtitle'>
          Informatikus hallgatokent webes rendszereket es jatekokat fejlesztek.
          A celom, hogy kreativ, megbizhato es felhasznalo-barat megoldasokat
          keszitsek valos problemakra.
        </p>
      </div>

      <div className='landing-grid landing-grid-2'>
        <article className='landing-card landing-card-highlight'>
          <h3>Miert kulonleges ez a portfolio?</h3>
          <p>
            Itt nem csak a kesz projektek lathatok, hanem az a gondolkodas is,
            ahogyan egy otletbol mukodo termek lesz. A hangsuly a letisztult UI,
            a jo felhasznaloi elmeny es az atlathato kodszerkezet.
          </p>
        </article>

        <article className='landing-card'>
          <h3>Technologia es kreativitas</h3>
          <p>
            A webes stack mellett Godot engine-ben is fejlesztek. Ez a ket vilag
            egyutt adja azt a szemleletet, ahol az interaktivitas, a vizualis
            minoseg es a teljesitmeny egyszerre fontos.
          </p>
        </article>
      </div>

      <section className='landing-showcase'>
        <div className='showcase-head'>
          <h3>Kiemelt projektek</h3>
          <p>
            Nyilakkal lapozhatsz. A kozepso kartya kepere kattintva megnyilik a
            projekt oldala.
          </p>
        </div>

        <div className='showcase-carousel'>
          <button
            className='showcase-nav-btn'
            onClick={prevProject}
            aria-label='Elozo projekt'
          >
            {'<'}
          </button>

          <article className='showcase-card showcase-card-side' onClick={prevProject}>
            <img src={leftProject.project_img} alt={leftProject.project_name} />
            <h4>{leftProject.project_name}</h4>
          </article>

          <article className='showcase-card showcase-card-active'>
            <a
              href={centerProject.link}
              target='_blank'
              rel='noopener noreferrer'
              className='showcase-link'
            >
              <img src={centerProject.project_img} alt={centerProject.project_name} />
            </a>
            <h4>{centerProject.project_name}</h4>
            <p>{centerProject.project_details}</p>
          </article>

          <article className='showcase-card showcase-card-side' onClick={nextProject}>
            <img src={rightProject.project_img} alt={rightProject.project_name} />
            <h4>{rightProject.project_name}</h4>
          </article>

          <button
            className='showcase-nav-btn'
            onClick={nextProject}
            aria-label='Kovetkezo projekt'
          >
            {'>'}
          </button>
        </div>
      </section>

      <div className='landing-grid'>
        <article className='landing-card'>
          <h3>Tanulmanyi utam</h3>
          <p>
            Encs Vaci Mihaly Gimnazium (5 eves nyelvi tagozat) -&gt; Miskolci
            Egyetem Programtervezo Informatikus BSc -&gt; Informatikatanar MSc
            kepzes -&gt; Matematikatanari tovabblepes.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MainMenu;
