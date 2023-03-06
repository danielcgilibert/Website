/* eslint-disable react/jsx-key */
import { DiCss3, DiJavascript1, DiReact } from 'react-icons/di'
import {
  FcAnswers,
  FcBusinessman,
  FcConferenceCall,
  FcDataSheet,
  FcDoughnutChart,
  FcFilmReel,
} from 'react-icons/fc'
import { SiRedux } from 'react-icons/si'

export const projects = [
  {
    name: 'Filmoteca',
    desc: 'Aplicación con llamadas a distintas API, construida con firebase y react',
    icon: <FcFilmReel size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/Filmoteca',
    hrefWeb: 'https://filmoteca-994ba.web.app/',
    stack: [
      <DiReact size={25} />,
      <DiJavascript1 size={25} />,
      <DiCss3 size={25} />,
      <SiRedux size={25} />,
    ],
  },
  {
    name: 'Fiber',
    desc: 'Landing Page',
    icon: <FcAnswers size={25} />,

    hrefCode: 'https://github.com/danielcgilibert/Fiber-Landing-Page',
    hrefWeb: 'https://danielcgilibert.github.io/Fiber-Landing-Page/',
    stack: [
      <DiReact size={25} />,
      <DiJavascript1 size={25} />,
      <DiCss3 size={25} />,
      <SiRedux size={25} />,
    ],
  },
  {
    name: 'Portfolio',
    desc: 'Antiguo portfolio',
    icon: <FcBusinessman size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/Portfolio',
    hrefWeb: 'https://portfolio-eight-rho-97.vercel.app/',
    stack: [
      <DiReact size={25} />,
      <DiJavascript1 size={25} />,
      <DiCss3 size={25} />,
      <SiRedux size={25} />,
    ],
  },
  {
    name: 'Chart',
    desc: 'Gráfica dinamica',
    icon: <FcDoughnutChart size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/challenges-FrontendMentor',
    hrefWeb: 'https://challenges-fronted-mentor-chart-component.vercel.app/',

    stack: [
      <DiReact size={25} />,
      <DiJavascript1 size={25} />,
      <DiCss3 size={25} />,
      <SiRedux size={25} />,
    ],
  },
  {
    name: 'Layout Grid',
    desc: 'Grid layout',
    icon: <FcDataSheet size={25} />,

    hrefCode: 'https://github.com/danielcgilibert/challenges-FrontendMentor',
    hrefWeb: 'https://cfm-grid.netlify.app/',

    stack: [
      <DiReact size={25} />,
      <DiJavascript1 size={25} />,
      <DiCss3 size={25} />,
      <SiRedux size={25} />,
    ],
  },

  {
    name: 'Jira-Clone',
    desc: 'Jira-Clone with NextJS and MaterialUI',
    icon: <FcConferenceCall size={25} />,
    hrefCode: 'https://github.com/danielcgilibert/Jira-Clone',
    hrefWeb: '',
    stack: [
      <DiReact size={25} />,
      <DiJavascript1 size={25} />,
      <DiCss3 size={25} />,
      <SiRedux size={25} />,
    ],
  },
]
