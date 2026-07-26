import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

/* Váltakozó "jelenleg ezen dolgozom" sorok — a valós projektjeid alapján */
const FOCUS_ITEMS = [
  { label: 'projekt', value: 'időpontfoglaló SaaS (szalonoknak)' },
  { label: 'stack', value: 'NestJS · Next.js · Barion' },
  { label: 'projekt', value: 'készlet- és értesítő platform' },
  { label: 'projekt', value: 'JRPG horror · Godot Engine' },
];

const Rightside = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState('');
  const [focusIndex, setFocusIndex] = useState(0);
  const [booted, setBooted] = useState(false);

  /* Élő óra — Europe/Budapest */
  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('hu-HU', {
          timeZone: 'Europe/Budapest',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* "Boot" animáció csak egyszer, oldalbetöltéskor */
  useEffect(() => {
    const id = setTimeout(() => setBooted(true), 60);
    return () => clearTimeout(id);
  }, []);

  /* Fókusz sor váltogatása */
  useEffect(() => {
    const id = setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % FOCUS_ITEMS.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  const lines = [
    { k: 'user', v: 'janos@miskolc', static: true },
    { k: 'os', v: 'NixOS · flake, 2 host', static: true },
    { k: 'idő', v: time, live: true },
    {
      k: FOCUS_ITEMS[focusIndex].label,
      v: FOCUS_ITEMS[focusIndex].value,
      live: true,
    },
    { k: 'macskák', v: '7/7 online 🐱', static: true },
    { k: 'státusz', v: 'kávé mellett kódolok ☕', static: true },
  ];

  return (
    <div id='rightside'>
      <div className={`term-card${booted ? ' term-booted' : ''}`}>
        <div className='term-titlebar'>
          <span className='term-dot term-dot-r' />
          <span className='term-dot term-dot-y' />
          <span className='term-dot term-dot-g' />
          <span className='term-titlebar-label'>status.sh</span>
        </div>

        <div className='term-body'>
          {lines.map((line, i) => (
            <div
              className='term-line'
              key={line.k}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className='term-prompt'>$</span>
              <span className='term-key'>{line.k}</span>
              <span className='term-sep'>→</span>
              <span
                className={`term-value${line.live ? ' term-value-live' : ''}`}
              >
                {line.v}
              </span>
            </div>
          ))}

          <button
            type='button'
            className='term-line term-cta'
            onClick={() => navigate('/projects')}
          >
            <span className='term-prompt'>$</span>
            <span className='term-key'>cat</span>
            <span className='term-sep'>→</span>
            <span className='term-value term-value-link'>projects.md</span>
          </button>

          <div className='term-line term-cursor-line'>
            <span className='term-prompt'>$</span>
            <span className='term-cursor' />
          </div>
        </div>

        <a
          className='term-github-pill'
          href='https://github.com/JanosSandor2002'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiGithub />
          <span>@JanosSandor2002</span>
        </a>
      </div>
    </div>
  );
};

export default Rightside;
