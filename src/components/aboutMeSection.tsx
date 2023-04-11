import { ExternalLink } from '@/ui/link'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import Bot from './bot'

const AboutMeSection = () => {
  return (
    <section className=' flex flex-col gap-5  md:pr-24'>
      <header>
        <h1 className='text-4xl font-bold md:text-5xl '>Daniel Carmona</h1>
        <h2 className='flex gap-2 text-sm tracking-widest text-lightOrange antialiased md:text-xl  '>
          FRONT-END DEVELOPER <Bot />
        </h2>
        <div className='mt-3 flex gap-2 text-white text-opacity-50 '>
          <ExternalLink href='https://github.com/danielcgilibert'>
            <span className='hover: flex gap-1 transition-colors  ease-linear hover:text-gray-200'>
              <BsGithub size={20} name='Github' />
              GitHub
            </span>
          </ExternalLink>

          <ExternalLink href='https://es.linkedin.com/in/danielcarmonagilibert'>
            <span className='flex gap-1 transition-colors  ease-linear hover:text-blue-300'>
              <AiFillLinkedin size={20} name='Github' />
              Linkedin
            </span>
          </ExternalLink>
        </div>
      </header>
      <div className='flex flex-col gap-3'>
        <p className='leading-relaxed antialiased'>
          Siempre interesado en seguir desarrollando en este apasionante mundo
          del desarrollo.
        </p>
        <p className='leading-relaxed antialiased'>
          Si quieres contactarme, háblame por{' '}
          <ExternalLink
            href='https://es.linkedin.com/in/danielcarmonagilibert'
            className='font-semibold text-lightOrange underline hover:decoration-dotted'
          >
            LinkedIn
          </ExternalLink>{' '}
          y te responderé con la mayor brevedad posible.
        </p>
      </div>
    </section>
  )
}
export default AboutMeSection
