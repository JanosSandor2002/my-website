import backend_img from '../../images/backend_practicing.png';
import frontend_img from '../../images/frontend_practicing.png';
import game_practice_img from '../../images/game_practicing.jpeg';

export const practice_projects = [
  {
    id: 1,
    project_name: 'Backend Practicing',
    project_img: backend_img,
    link: 'https://github.com/JanosSandor2002/backend-practicing/',
    website: '',
    project_details:
      'Node.js, Express és Spring Boot alapú gyakorló API-k, REST végpontok és adatbázis-kapcsolat tesztelésére.',
    type: 'open',
  },
  {
    id: 2,
    project_name: 'Frontend Practicing',
    project_img: frontend_img,
    link: 'https://github.com/JanosSandor2002/frontend-practicing/',
    website: '',
    project_details:
      'React komponensek és állapotkezelési minták gyakorlása kisebb UI feladatokon keresztül.',
    type: 'open',
  },
  {
    id: 3,
    project_name: 'Rpg Practicing',
    project_img: game_practice_img,
    link: 'https://github.com/JanosSandor2002/udemy-learn-rpg/',
    website: '',
    project_details:
      'Udemy kurzus alapján készült gyakorló RPG projekt Godot-ban, alapvető játékmechanikák elsajátítására.',
    type: 'open',
  },
];
