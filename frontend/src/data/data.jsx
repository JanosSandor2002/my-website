import backroads_img from '../images/backroads.png';
import xfactor_img from '../images/xfactor.png';
import movingshop_img from '../images/movingshop.png';
import szakgyak_img from '../images/office.png';
import bsc_img from '../images/bsc.png';
import webtechassignment_img from '../images/webtechassignment_img.png';
import webtechassignment2_img from '../images/webtechassignment2_img.png';
import profilePic from '../images/self.jpg';
import { MdAlternateEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import { FaBirthdayCake } from 'react-icons/fa';
import facebookImage from '../images/facebook.png';
import linkedinImage from '../images/linkedin.png';
import githubImage from '../images/github.png';

export const info = {
  pic: profilePic,
  name: 'János Sándor',
  job: 'Web Developer',
};

export const contacts = [
  {
    id: 1,
    icon: <MdAlternateEmail />,
    name: 'E-mail',
    value: 'sandorj2002@gmail.com',
    href: 'mailto:sandorj2002@gmail.com',
  },
  {
    id: 2,
    icon: <FaSquarePhone />,
    name: 'Telefonszám',
    value: '+36301116731',
    href: 'tel:+36301116731',
  },
  {
    id: 3,
    icon: <FaBirthdayCake />,
    name: 'Születési dátum',
    value: '2002.11.19',
  },
];

export const socials = [
  {
    id: 1,
    href: 'https://www.facebook.com/jancsii.sandor',
    img: facebookImage,
    alt: 'Facebook',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/j%C3%A1nos-s%C3%A1ndor-77a0b7386/',
    img: linkedinImage,
    alt: 'LinkedIn',
  },
  {
    id: 3,
    href: 'https://github.com/JanosSandor2002',
    img: githubImage,
    alt: 'GitHub',
  },
];

export const websites = [
  {
    id: 1,
    project_name: 'Backroads Project',
    project_img: backroads_img,
    link: 'https://janossandor2002.github.io/backroads-project/',
    project_details:
      'Egy Udemy-kurzus keretében készült projekt, amelynek célja a modern webfejlesztési technikák gyakorlása volt — Janis Smilga kurzusa alapján.',
  },
  {
    id: 2,
    project_name: 'X-Factor Mentor Kvíz',
    project_img: xfactor_img,
    link: 'https://janossandor2002.github.io/xfactor-mentor-quiz-project/',
    project_details:
      'Kvízoldal, ahol a választott válaszok alapján kiderül, melyik X-Factor Hungary mentor illik hozzád a legjobban.',
  },
  {
    id: 3,
    project_name: 'Moving-Shop',
    project_img: movingshop_img,
    link: 'https://janossandor2002.github.io/moving-shop-website/',
    project_details:
      'Sablonweboldal egy költöztetési vállalkozás számára, nyereményjáték funkcióval és letisztult felhasználói felülettel.',
  },
  {
    id: 4,
    project_name: 'Webtechnológiák 1. Beadandó',
    project_img: webtechassignment_img,
    link: 'https://janossandor2002.github.io/frontend-practicing/',
    project_details:
      'A Webtechnológiák 1 tantárgy beadandó feladata a 2025/26-os tanév első szemeszterében.',
  },
  {
    id: 5,
    project_name: 'Webtechnológiák 2. Beadandó',
    project_img: webtechassignment2_img,
    link: 'https://github.com/JanosSandor2002/web-technologies-2-next-project',
    project_details:
      'A Webtechnológiák 2 tantárgy beadandó feladata a 2025/26-os tanév második szemeszterében.',
  },
];

export const university = [
  {
    id: 1,
    project_name: 'BSc Szakdolgozat',
    project_img: bsc_img,
    link: 'https://github.com/JanosSandor2002/bsc-degree-project',
    project_details:
      'A BSc diploma projekt teljes forráskódja és dokumentációja. Projektmenedzsment szoftver React, React Native és Express.js technológiákkal.',
  },
  {
    id: 2,
    project_name: 'Szakmai Gyakorlat Projekt',
    project_img: szakgyak_img,
    link: 'https://janossandor2002.github.io/szakmai-gyakorlat/',
    project_details:
      'Szakmai gyakorlat keretében, négy fős csapatban közösen fejlesztett játék. A projekt hangsúlya az együttműködésen és a csapatmunkán volt.',
  },
];

/* ─────────────────────────────────────────
   Technológiák
   Szintek: Kezdő | Junior | Haladó | Medior | Senior | Tanulandó
───────────────────────────────────────── */

export const technologies = {
  /* Webes alap */
  web: [
    { id: 1, technology: 'HTML', time: '2-3 hónap', level: 'Medior' },
    { id: 2, technology: 'CSS', time: '2-3 hónap', level: 'Haladó' },
    { id: 3, technology: 'JavaScript', time: '2-3 hónap', level: 'Haladó' },
    { id: 4, technology: 'TypeScript', time: '2-3 hónap', level: 'Junior' },
  ],

  /* Keretrendszerek és könyvtárak */
  frameworks: [
    { id: 5, technology: 'React', time: '2-3 hónap', level: 'Haladó' },
    { id: 6, technology: 'React Native', time: '1-2 hónap', level: 'Kezdő' },
    { id: 7, technology: 'React Router', time: '2-3 hónap', level: 'Haladó' },
    { id: 8, technology: 'TanStack Query', time: '1-2 hónap', level: 'Kezdő' },
    { id: 9, technology: 'Redux', time: '0 hónap', level: 'Tanulandó' },
    { id: 10, technology: 'Next.js', time: '0 hónap', level: 'Kezdő' },
    { id: 11, technology: 'Express.js', time: '1-2 hónap', level: 'Kezdő' },
  ],

  /* React Hooks */
  hooks: [
    { id: 12, technology: 'useReducer', time: '2-3 hónap', level: 'Haladó' },
  ],

  /* UI és dizájn */
  ui: [
    { id: 13, technology: 'Bootstrap', time: '1-2 hónap', level: 'Junior' },
    { id: 14, technology: 'Tailwind CSS', time: '0 hónap', level: 'Kezdő' },
    { id: 15, technology: 'Figma', time: '1-2 hónap', level: 'Junior' },
  ],

  /* Játékfejlesztés */
  gamedev: [
    { id: 16, technology: 'Godot Engine', time: '1-2 hónap', level: 'Kezdő' },
    { id: 17, technology: 'GDScript', time: '1-2 hónap', level: 'Kezdő' },
    { id: 18, technology: '2D fejlesztés', time: '1-2 hónap', level: 'Kezdő' },
    { id: 19, technology: 'Animációk', time: '1 hónap', level: 'Kezdő' },
    { id: 20, technology: 'Art / Sprite', time: '1 hónap', level: 'Kezdő' },
    { id: 21, technology: 'Pályatervezés', time: '1 hónap', level: 'Kezdő' },
  ],

  /* Oktatás */
  teaching: [
    {
      id: 22,
      technology: 'Informatika',
      time: 'Korrepetálás',
      level: 'Junior',
    },
    { id: 23, technology: 'Matematika', time: 'Korrepetálás', level: 'Junior' },
    { id: 24, technology: 'Angol', time: 'Korrepetálás', level: 'Kezdő' },
    { id: 25, technology: 'Történelem', time: 'Korrepetálás', level: 'Kezdő' },
  ],
};
