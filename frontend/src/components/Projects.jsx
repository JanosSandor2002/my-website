import React from 'react';
import { websites, university } from '../data/data';

const Projects = () => {
  return (
    <section id='projektek' className='projects-page'>

      <h2>Webes projektek</h2>
      <p className='projects-intro'>
        Legfrissebb munkáim, ahol a frontend, a UI-tervezés és az interakció kapja a fő hangsúlyt.
      </p>
      <div className='project-grid'>
        {websites.map(({ id, project_name, project_img, project_details, link }) => (
          <article className='project-item' key={id}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <img src={project_img} alt={project_name} />
            </a>
            <div className='project-content'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <h3>{project_name}</h3>
              </a>
              <p>{project_details}</p>
            </div>
          </article>
        ))}
      </div>

      <h2>Egyetemi és szakmai projektek</h2>
      <p className='projects-intro'>
        Olyan munkák, amelyekben a csapatmunka, a komplexebb architektúra és a dokumentáció
        is fontos szerepet kapott.
      </p>
      <div className='project-grid'>
        {university.map(({ id, project_name, project_img, project_details, link }) => (
          <article className='project-item' key={id}>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <img src={project_img} alt={project_name} />
            </a>
            <div className='project-content'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <h3>{project_name}</h3>
              </a>
              <p>{project_details}</p>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default Projects;