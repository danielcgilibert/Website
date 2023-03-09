/* eslint-disable react/jsx-key */
import {
  FcAnswers,
  FcBullish,
  FcBusinessman,
  FcConferenceCall,
  FcFilmReel,
  FcNeutralDecision,
  FcPieChart,
  FcTodoList,
} from 'react-icons/fc'

export const projects = [
  {
    name: 'Jira-Clone',
    desc: 'Jira-Clone con NextJS y MaterialUI',
    icon: <FcConferenceCall size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/Jira-Clone',
    hrefWeb: '',
  },
  {
    name: 'Filmoteca',
    desc: 'Aplicación con llamadas a distintas API, construida con firebase y react',
    icon: <FcFilmReel size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/Filmoteca',
    hrefWeb: 'https://filmoteca-994ba.web.app/',
  },
  {
    name: 'Challenges',
    desc: 'Repositorio con challenges de frontendmentor.io',
    icon: <FcTodoList size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/challenges-FrontendMentor',
    hrefWeb: '',
  },

  {
    name: 'Portfolio',
    desc: 'Antiguo portfolio con blog, snippets...',
    icon: <FcBusinessman size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/portfolio',
    hrefWeb: 'https://portfolio-uwxs.vercel.app',
  },
  {
    name: 'Post It',
    desc: 'Aplicación CRUD con prisma, nextjs, tailwind',
    icon: <FcNeutralDecision size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/PostIt',
    hrefWeb: '',
  },
  {
    name: 'Fiber',
    desc: 'Landing Page',
    icon: <FcAnswers size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/Fiber-Landing-Page',
    hrefWeb: 'https://danielcgilibert.github.io/Fiber-Landing-Page/',
  },
  {
    name: 'Chart',
    desc: 'Expenses chart component',
    icon: <FcPieChart size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/challenges-FrontendMentor',
    hrefWeb: 'https://challenges-fronted-mentor-chart-component.vercel.app/',
  },

  {
    name: 'Crowdfunding product page',
    desc: 'Website de crowdfunding con React y vite',
    icon: <FcBullish size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/challenges-FrontendMentor',
    hrefWeb: 'https://cfm-crowdfunding.vercel.app/',
  },
]
