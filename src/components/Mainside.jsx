import React from 'react';
import { TiHome } from 'react-icons/ti';
import { GrProjects } from 'react-icons/gr';
import { LuNotebookPen } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';

const Mainside = () => {
  return (
    <main>
      <header>
        <h1>header name property</h1>
        <div className='nav-container show-nav'>
          <div className='nav-icons'>
            <Navicons />
          </div>
          <div className='nav-text show-nav-text'>name of what u choose</div>
        </div>
      </header>
    </main>
  );
};

export default Mainside;

const Navicons = () => {
  return (
    <>
      <button>
        <TiHome />
      </button>
      <button>
        <GrProjects />
      </button>
      <button>
        <LuNotebookPen />
      </button>
      <button>
        <GrContact />
      </button>
    </>
  );
};
