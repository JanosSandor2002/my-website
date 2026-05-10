import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Mainside = () => {
  const { pathname } = useLocation();
  const titleByPath = {
    '/': 'MainMenu',
    '/projects': 'Projects',
    '/qualification': 'Studies',
    '/contact': 'Contact',
  };

  return (
    <main>
      <header>
        <h1>{titleByPath[pathname] ?? 'MainMenu'}</h1>
      </header>
      <Outlet />
    </main>
  );
};

export default Mainside;
