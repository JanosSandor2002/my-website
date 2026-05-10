import React from 'react';
import { TiHome } from 'react-icons/ti';
import { GrProjects } from 'react-icons/gr';
import { LuNotebookPen } from 'react-icons/lu';
import { GrContact } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const RightNavIcons = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const navItems = [
    { id: 'main', label: 'MainMenu', icon: <TiHome />, path: '/' },
    { id: 'projects', label: 'Projects', icon: <GrProjects />, path: '/projects' },
    { id: 'studies', label: 'Studies', icon: <LuNotebookPen />, path: '/qualification' },
    { id: 'contact', label: 'Contact', icon: <GrContact />, path: '/contact' },
  ];

  return (
    <div
      className={`right-nav-icons nav-container ${isExpanded ? 'right-nav-icons-expanded' : ''}`}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className='nav-icons'>
        {navItems.map((item) => (
          <button
            key={item.id}
            className='right-nav-item'
            onClick={() => navigate(item.path)}
            onMouseEnter={() => setIsExpanded(true)}
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
