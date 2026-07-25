// ./components/Mainside.jsx
import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Mainside = () => {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // FIX: oldalváltáskor scroll vissza a tetejére
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [pathname]);

  const titleByPath = {
    '/':              'Főoldal',
    '/projects':      'Projektek',
    '/qualification': 'Tanulmányok',
    '/contact':       'Rólam',
  };

  return (
    <main ref={mainRef}>
      <header>
        <h1>{titleByPath[pathname] ?? 'Főoldal'}</h1>
      </header>
      <Outlet />
    </main>
  );
};

export default Mainside;