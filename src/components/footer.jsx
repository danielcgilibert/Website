const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between gap-5 border-t-2 border-[#393942] border-opacity-50 p-6">
      <div className="flex w-full justify-center">
        {/* <div className="flex gap-5">
          <span className="flex justify-center items-center gap-1">
            <AiOutlineHome size={20} />
            Home
          </span>
        </div> */}
        <div className="w-full flex justify-center md:justify-end  gap-5">
          <span>linkedin</span>
          <span>GitHub</span>
          <span>Dev.to</span>
          <span>Status</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div>Made with NextJS</div>
        <div>© Daniel 2023</div>
      </div>
    </footer>
  )
}

export default Footer
