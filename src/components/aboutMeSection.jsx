import { ExternalLink } from '@/ui/link'

const AboutMeSection = () => {
  return (
    <section className="flex flex-col gap-5 md:pr-24">
      <header>
        <h1 className="font-bold text-4xl md:text-5xl ">Daniel Carmona</h1>
        <h2 className="text-[#ffd2b4] md:text-xl antialiased text-sm tracking-widest  ">
          FRONT-END DEVELOPER
        </h2>
      </header>
      <p className="antialiased leading-relaxed">
        Siempre interesado en seguir desarrollando en este apasionante mundo del
        desarrollo.
      </p>
      <p className="antialiased leading-relaxed">
        Si quieres contactarme, háblame por{' '}
        <ExternalLink
          href="https://es.linkedin.com/in/danielcarmonagilibert"
          className="text-[#ffd2b4] font-semibold underline hover:decoration-dotted">
          LinkedIn
        </ExternalLink>{' '}
        y te responderé con la mayor brevedad posible.
      </p>
    </section>
  )
}
export default AboutMeSection
