const Container = ({ children, fonts }) => {
  const [inter] = fonts
  return (
    <main
      className={`max-w-xl md:max-w-5xl mx-auto grid grid-cols-1 auto-rows-[auto_1fr_auto] gap-4 md:gap-14   ${inter.variable}  font-inter`}>
      {children}
    </main>
  )
}

export default Container
