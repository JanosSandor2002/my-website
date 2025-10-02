import React from 'react';
import '../styles/Qualification.css';
import { technologies } from '../data/projects';
const Qualification = () => {
  return (
    <div className='qualities' id='qualifications'>
      <h1>Qualification</h1>
      <table>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Time Spent</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map(({ id, technology, time, level }) => (
            <tr key={id}>
              <td>{technology}</td>
              <td>{time}</td>
              <td>{level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Qualification;
