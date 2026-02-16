import React from 'react';
import { TiHome } from 'react-icons/ti';
import { GrProjects } from 'react-icons/gr';
import { LuNotebookPen } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';
import { useGlobalContext } from '../useHooks/Context';
import { MdHeight } from 'react-icons/md';
import MainMenu from './MainMenu';

const Mainside = () => {
  const {
    openMenu,
    openStudies,
    openProjects,
    openForm,
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
        <h1>
          {isMenuOpen
            ? 'MainMenu'
            : isProjectsOpen
              ? 'Projects'
              : isStudiesOpen
                ? 'Studies'
                : isFormOpen
                  ? 'Contact'
                  : 'Issue'}
        </h1>
        <div className={`nav-container ${iconName ? 'show-nav' : ''}`}>
          <div className='nav-icons'>
            <Navicons
              setIconName={setIconName}
              removeIconName={removeIconName}
              openMenu={openMenu}
              openStudies={openStudies}
              openProjects={openProjects}
              openForm={openForm}
            />
          </div>
          <div
            className={
              iconName ? 'show-nav show-nav-text set-text' : 'nav-text'
            }
          >
            {iconName}
          </div>
        </div>
      </header>
      {isMenuOpen ? (
        <MainMenu />
      ) : isProjectsOpen ? (
        'Projects'
      ) : isStudiesOpen ? (
        'Studies'
      ) : isFormOpen ? (
        'Contact'
      ) : (
        'Issue'
      )}
    </main>
  );
};

export default Mainside;

const Navicons = ({
  setIconName,
  removeIconName,
  openMenu,
  openForm,
  openProjects,
  openStudies,
}) => {
  return (
    <>
      <button
        onMouseEnter={() => setIconName('MainMenu')}
        onMouseLeave={removeIconName}
        onClick={openMenu}
      >
        <TiHome />
      </button>
      <button
        onMouseEnter={() => setIconName('Projects')}
        onMouseLeave={removeIconName}
        onClick={openProjects}
      >
        <GrProjects />
      </button>
      <button
        onMouseEnter={() => setIconName('Studies')}
        onMouseLeave={removeIconName}
        onClick={openStudies}
      >
        <LuNotebookPen />
      </button>
      <button
        onMouseEnter={() => setIconName('Contact')}
        onMouseLeave={removeIconName}
        onClick={openForm}
      >
        <GrContact />
      </button>
    </>
  );
};
