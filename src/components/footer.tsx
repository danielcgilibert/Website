const Footer = () => {
  const date = new Date()
  return (
    <footer className='flex w-full flex-col justify-between gap-2 border-t-2 border-customGray  p-6'>
      <div className='flex items-center justify-end gap-2'>
        <div>© {date.getFullYear()} Daniel</div>
        <img
          className='h-4 w-4 rounded-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/2560px-Flag_of_Spain_%28Civil%29.svg.png'
        />
      </div>
    </footer>
  )
}

export default Footer
