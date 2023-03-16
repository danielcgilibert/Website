import { ExternalLink } from '@/ui/link'
import { FaDev, FaGithubSquare, FaInfoCircle, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  return (
    <footer className="w-full flex flex-col justify-between gap-2 border-t-2 border-customGray  p-6">
      <div className="flex w-full justify-center ">
        <div className="w-full flex  justify-end gap-2 ">
          <ExternalLink href="https://es.linkedin.com/in/danielcarmonagilibert">
            <FaLinkedin size={22} />
          </ExternalLink>
          <ExternalLink href="https://github.com/danielcgilibert">
            <FaGithubSquare size={22} name="Github" />
          </ExternalLink>
          <ExternalLink href="https://dev.to/danielcgilibert">
            <FaDev size={22} />
          </ExternalLink>
          <ExternalLink href="https://status.danielcg.dev/">
            <FaInfoCircle size={22} />
          </ExternalLink>
        </div>
      </div>
      <div className="flex justify-between">
        <div>Made with NextJS</div>
        <div>© Daniel {date.getFullYear()}</div>
      </div>
    </footer>
  )
}

export default Footer
