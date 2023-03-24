const Footer = () => {
  const date = new Date()
  return (
    <footer className='flex w-full flex-col justify-between gap-2 border-t-2 border-customGray  p-6'>
      <div className='flex justify-between'>
        <div>Made with NextJS</div>
        <div>© Daniel {date.getFullYear()}</div>
      </div>
    </footer>
  )
}

export default Footer
