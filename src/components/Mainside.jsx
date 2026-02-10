import React from 'react';
import { TiHome } from 'react-icons/ti';
import { GrProjects } from 'react-icons/gr';
import { LuNotebookPen } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';
import { useGlobalContext } from '../useHooks/Context';

const Mainside = () => {
  const {
    isMenuOpen,
    isProjectsOpen,
    isStudiesOpen,
    isFormOpen,
    setIconName,
    removeIconName,
    iconName,
  } = useGlobalContext();

  return (
    <main>
      <header>
        <h1>header name property</h1>
        <div className='nav-container'>
          <div className='nav-icons'>
            <Navicons
              setIconName={setIconName}
              removeIconName={removeIconName}
            />
          </div>
          <div
            className={
              iconName ? 'nav-text show-nav show-nav-text' : 'nav-text'
            }
          >
            {iconName}
          </div>
        </div>
      </header>
    </main>
  );
};

export default Mainside;

const Navicons = ({ setIconName, removeIconName }) => {
  return (
    <>
      <button
        onMouseEnter={() => setIconName('MainMenu')}
        onMouseLeave={removeIconName}
      >
        <TiHome />
      </button>
      <button
        onMouseEnter={() => setIconName('Projects')}
        onMouseLeave={removeIconName}
      >
        <GrProjects />
      </button>
      <button
        onMouseEnter={() => setIconName('Studies')}
        onMouseLeave={removeIconName}
      >
        <LuNotebookPen />
      </button>
      <button
        onMouseEnter={() => setIconName('Contact')}
        onMouseLeave={removeIconName}
      >
        <GrContact />
      </button>
    </>
  );
};
