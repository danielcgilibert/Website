import { ExternalLink } from '@/ui/link'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between gap-5 border-t-2 border-[#393942] border-opacity-50 p-6">
      <div className="flex w-full justify-center">
        <div className="w-full flex justify-center md:justify-end  gap-5">
          <ExternalLink href="https://es.linkedin.com/in/danielcarmonagilibert">
            linkedin
          </ExternalLink>
          <ExternalLink href="https://github.com/danielcgilibert">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://dev.to/danielcgilibe">
            Dev.to
          </ExternalLink>
          <ExternalLink href="https://status.danielcg.dev/">
            Status
          </ExternalLink>
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
