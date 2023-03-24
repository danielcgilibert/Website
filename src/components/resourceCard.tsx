import { IResource } from '@/types/resource'
import { ExternalLink } from '@/ui/link'

const ResourceCard = ({ name, icon, description, url }: IResource) => {
  return (
    <ExternalLink href={url}>
      <div
        className={`flex min-h-full items-center  justify-start gap-2 border-b-2 border-lightBrown p-2 hover:bg-lightBrown  `}
      >
        <img src={icon} alt='railwayIcon' className='w-8 rounded-full' />
        <div>
          <h1 className='text-lg font-semibold'>{name}</h1>
          <p className='text-sm text-white text-opacity-50'>{description}</p>
        </div>
      </div>
    </ExternalLink>
  )
}

export default ResourceCard
