import React from 'react';
import { javascript_projects } from '../data/projects/javascript';
import { university_projects } from '../data/projects/university';
import { java_projects } from '../data/projects/java';
import { godot_projects } from '../data/projects/godot';
import { practice_projects } from '../data/projects/practice';

const ProjectGrid = ({ items }) => (
  <div className='project-grid'>
    {items.map(
      ({ id, project_name, project_img, project_details, link, website }) => (
        <article className='project-item' key={id}>
          <img src={project_img} alt={project_name} />
          <div className='project-content'>
            <h3>{project_name}</h3>
            <p>{project_details}</p>

            {(link || website) && (
              <div className='project-links'>
                {link && (
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-btn project-btn-source'
                  >
                    Forráskód
                  </a>
                )}
                {website && (
                  <a
                    href={website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-btn project-btn-website'
                  >
                    Weboldal
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      ),
    )}
  </div>
);

const Projects = () => {
  return (
    <section id='projektek' className='projects-page'>
      <h2>Webes projektek</h2>
      <p className='projects-intro'>
        Legfrissebb munkáim, ahol a frontend, a UI-tervezés és az interakció
        kapja a fő hangsúlyt.
      </p>
      <ProjectGrid items={javascript_projects} />

      <h2>Egyetemi projektek</h2>
      <p className='projects-intro'>
        Olyan munkák, amelyekben a csapatmunka, a komplexebb architektúra és a
        dokumentáció is fontos szerepet kapott.
      </p>
      <ProjectGrid items={university_projects} />

      <h2>Java projektek</h2>
      <p className='projects-intro'>Java alapú fejlesztések és kísérletek.</p>
      <ProjectGrid items={java_projects} />

      <h2>Godot projektek</h2>
      <p className='projects-intro'>
        Godot Engine-ben készült játékfejlesztési projektek.
      </p>
      <ProjectGrid items={godot_projects} />

      <h2>Gyakorló projektek</h2>
      <p className='projects-intro'>Kisebb, tanulási célú gyakorló munkák.</p>
      <ProjectGrid items={practice_projects} />
    </section>
  );
};

export default Projects;
