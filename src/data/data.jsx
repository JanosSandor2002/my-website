import backroads_img from '../images/backroads.png';
import xfactor_img from '../images/xfactor.png';
import movingshop_img from '../images/movingshop.png';
import szakgyak_img from '../images/office.png';
import bsc_img from '../images/bsc.png';
import webtechassignment_img from '../images/webtechassignment_img.png';
import profilePic from '../images/self.png';
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
    name: 'Phone Number',
    value: '+36301116731',
    href: 'tel:+36301116731',
  },
  {
    id: 3,
    icon: <FaBirthdayCake />,
    name: 'Born',
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
      'This project was aimed to practise modern web developing via an Udemy Course made by Janis Smilga',
  },
  {
    id: 2,
    project_name: 'X-factor Mentor Quiz',
    project_img: xfactor_img,
    link: 'https://janossandor2002.github.io/xfactor-mentor-quiz-project/',
    project_details:
      'It was made for creating a quiz website, where by choices you get in reward a mentor from X factor Hungary.',
  },
  {
    id: 3,
    project_name: 'Moving-Shop',
    project_img: movingshop_img,
    link: 'https://janossandor2002.github.io/moving-shop-website/',
    project_details:
      'Template website for a moving shop with some functions such as raffle.',
  },
  {
    id: 4,
    project_name: 'Web Technologies Assignment',
    project_img: webtechassignment_img,
    link: 'https://janossandor2002.github.io/frontend-practicing/',
    project_details:
      'Assignment website for Web Technologies 1 subject made in 2026/1. semester',
  },
];
export const university = [
  {
    id: 1,
    project_name: 'Bsc Degree Project',
    project_img: bsc_img,
    link: 'https://github.com/JanosSandor2002/bsc-degree-project',
    project_details:
      'This repository contains everything for my bsc degree project for Computer Science. It is a projectmanagement sofvare made by React, React Native, and Express.js',
  },
  {
    id: 2,
    project_name: 'Professional Internship Project',
    project_img: szakgyak_img,
    link: 'https://janossandor2002.github.io/szakmai-gyakorlat/',
    project_details:
      'This project was developed as part of fulfilling the requirements for a professional internship. It was a collaborative game development effort by a team of four members',
  },
];
export const technologies = {
  junior: [
    {
      id: 1,
      technology: 'HTML',
      time: '2-3 months',
      level: 'Medior',
    },
    {
      id: 2,
      technology: 'CSS',
      time: '2-3 months',
      level: 'Junior',
    },
    {
      id: 3,
      technology: 'JavaScript',
      time: '2-3 months',
      level: 'Junior',
    },
  ],
  utils: [
    {
      id: 4,
      technology: 'Bootstrap',
      time: '1-2 months',
      level: 'Junior',
    },
    {
      id: 5,
      technology: 'TailWind CSS',
      time: '0 months',
      level: 'None',
    },
    {
      id: 6,
      technology: 'TypeScript',
      time: '2-3 months',
      level: 'Junior',
    },
  ],
  medior: [
    {
      id: 7,
      technology: 'React',
      time: '2-3 months',
      level: 'Junior',
    },
    {
      id: 8,
      technology: 'Next.js',
      time: '0 months',
      level: 'None',
    },
    {
      id: 9,
      technology: 'React Native',
      time: '0 months',
      level: 'None',
    },
    {
      id: 10,
      technology: 'Redux',
      time: '0 months',
      level: 'None',
    },
    {
      id: 11,
      technology: 'Express.js',
      time: '0 months',
      level: 'None',
    },
  ],
};
