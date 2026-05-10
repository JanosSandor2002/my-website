import React from 'react';
import { TiHome } from 'react-icons/ti';
import { GrProjects } from 'react-icons/gr';
import { LuNotebookPen } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';
import { useNavigate, useLocation } from 'react-router-dom';

const RightNavIcons = () => {
  const navigate  = useNavigate();
  const { pathname } = useLocation();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const navItems = [
    { id: 'main',          label: 'Főoldal',     icon: <TiHome />,        path: '/' },
    { id: 'projects',      label: 'Projektek',   icon: <GrProjects />,    path: '/projects' },
    { id: 'qualification', label: 'Tanulmányok', icon: <LuNotebookPen />, path: '/qualification' },
    { id: 'contact',       label: 'Rólam',       icon: <GrContact />,     path: '/contact' },
  ];

  return (
    <div
      className={`right-nav-icons ${isExpanded ? 'right-nav-icons-expanded' : ''}`}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className='nav-icons'>
        {navItems.map((item) => (
          <button
            key={item.id}
            className='right-nav-item'
            onClick={() => navigate(item.path)}
            onMouseEnter={() => setIsExpanded(true)}
            style={pathname === item.path ? { background: 'var(--accent-dim)' } : {}}
            aria-label={item.label}
          >
            {item.icon}
            <span className='right-nav-label'>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RightNavIcons;