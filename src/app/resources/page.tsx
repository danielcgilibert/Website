// COMPONENTS
import ResourceCard from '@/components/resource-card'

// SERVICES
import { getResources } from '@/services/getResources'

// TYPES
import { IResource } from '@/types/resource'

export default async function Page() {
  const resources: IResource[] = await getResources()
  return (
    <section className='px-6 md:p-0 '>
      <div className=' grid grid-cols-1 gap-8 md:grid-cols-3   md:p-0   '>
        {resources?.map((resource: any) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </section>
  )
}
