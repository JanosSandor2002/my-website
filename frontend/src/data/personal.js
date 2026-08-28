import facebookImage from '../images/facebook.png';
import linkedinImage from '../images/linkedin.png';
import githubImage from '../images/github.png';
import profilePic from '../images/self.jpg';
import { MdAlternateEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import { FaBirthdayCake } from 'react-icons/fa';

export const info = {
  pic: profilePic,
  name: 'János Sándor',
  job: 'Developer',
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
