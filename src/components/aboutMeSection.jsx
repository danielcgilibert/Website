const AboutMeSection = () => {
  return (
    <section className="flex flex-col gap-5 md:pr-24">
      <header>
        <h1 className=" font-bold text-4xl md:text-5xl">Daniel Carmona</h1>
        <h2 className=" md:text-xl antialiased text-sm tracking-widest">
          FRONT-END DEVELOPER
        </h2>
      </header>
      <p className="prose:text-white antialiased leading-relaxed">
        Siempre interesado en seguir desarrollando en este apasionante mundo del
        desarrollo.
      </p>
      <p className="prose:text-white antialiased l  eading-relaxed">
        Si quieres contactarme, háblame por{' '}
        <a
          href="google.com"
          className="font-semibold underline hover:decoration-dotted">
          LinkedIn
        </a>{' '}
        y te responderé con la mayor brevedad posible.
      </p>
    </section>
  )
}
export default AboutMeSection
