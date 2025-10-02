import React from 'react';
import { websites } from '../data/projects';
import { university } from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div id='projects'>
      <h1 className='hh'>Websites Projects</h1>
      <div className='project'>
        {websites.map(
          ({ id, project_name, project_img, project_details, link }) => (
            <div className='project-item' key={id}>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <h1>{project_name}</h1>
              </a>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <img src={project_img} alt='picture' />
              </a>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <p>{project_details}</p>
              </a>
            </div>
          )
        )}
      </div>
      <h1 className='hh'>University & Professional Projects</h1>
      <div className='project'>
        {university.map(
          ({ id, project_name, project_img, project_details, link }) => (
            <div className='project-item' key={id}>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <h1>{project_name}</h1>
              </a>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <img src={project_img} alt='picture' />
              </a>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <p>{project_details}</p>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
