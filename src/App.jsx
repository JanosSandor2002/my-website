import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Leftside from './components/Leftside';
import Mainside from './components/Mainside';
import Rightside from './components/Rightside';
import RightNavIcons from './components/RightNavIcons';
import MainMenuPage from './pages/MainMenuPage';
import ProjectsPage from './pages/ProjectsPage';
import QualificationPage from './pages/QualificationPage';
import ContactPage from './pages/ContactPage';
const App = () => {
  return (
    <div className='container'>
      <Leftside />
      <Routes>
        <Route path='/' element={<Mainside />}>
          <Route index element={<MainMenuPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='qualification' element={<QualificationPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
      <div className='right-column'>
        <RightNavIcons />
        <Rightside />
      </div>
    </div>
  );
};

export default App;
