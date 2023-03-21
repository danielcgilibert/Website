import { ExternalLink } from '@/ui/link'

const AboutMeSection = () => {
  return (
    <section className='flex flex-col gap-5  md:pr-24'>
      <header>
        <h1 className='text-4xl font-bold md:text-5xl '>Daniel Carmona</h1>
        <h2 className='text-sm tracking-widest text-lightOrange antialiased md:text-xl  '>
          FRONT-END DEVELOPER
        </h2>
      </header>
      <p className='leading-relaxed antialiased'>
        Siempre interesado en seguir desarrollando en este apasionante mundo del
        desarrollo.
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
    </section>
  )
}
export default AboutMeSection
