import React from 'react';
import { websites, university } from '../data/data';

const Projects = () => {
  return (
    <section id='projects' className='projects-page'>
      <h2>Webes projektjeim</h2>
      <p className='projects-intro'>
        A legfrissebb munkaim, ahol frontend, UI es interakcio tervezes kapja a
        fo hangsulyt.
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

      <h2>Egyetemi es szakmai projektek</h2>
      <p className='projects-intro'>
        Olyan munkak, amelyekben csapatmunka, komplexebb architektura es
        dokumentacio is fontos szerepet kapott.
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
