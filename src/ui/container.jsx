const Container = ({ children }) => {
  return (
    <main className="max-w-xl md:max-w-5xl mx-auto grid grid-cols-1 auto-rows-auto   gap-4 md:gap-14">
      {children}
    </main>
  )
}

export default Container
