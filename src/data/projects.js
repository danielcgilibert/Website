/* eslint-disable react/jsx-key */
import { DiCss3, DiJavascript1, DiReact } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'

export const projects = [
  {
    name: 'Filmoteca',
    desc: 'Aplicación con llamadas a distintas API, construida con firebase y react',
    hrefCode: 'https://github.com/danielcgilibert/Filmoteca',
    hrefWeb: 'https://filmoteca-994ba.web.app/',
    icon: 'BsFilm',
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
