const Container = ({ children, fonts }) => {
  const [inter] = fonts
  return (
    <main
      className={`mx-auto grid max-w-xl auto-rows-[auto_1fr_auto] grid-cols-1 gap-4 md:max-w-4xl md:gap-14  ${inter.variable}  font-inter`}
    >
      {children}
    </main>
  )
}

export default Container
