import ResourceCard from '@/components/resourceCard'
import { IResource } from '@/types/resource'
import { apiNotion } from '@/utils/api'
import { NextPage } from 'next'

type ResourcesProps = {
  resources: IResource[]
}

const Resources: NextPage<ResourcesProps> = ({ resources }) => {
  return (
    <section className='px-6 md:p-0 '>
      <div className=' grid grid-cols-1 gap-8 md:grid-cols-3   md:p-0   '>
        {resources.map((resource: any) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </section>
  )
}
export default Resources

export const getStaticProps = async () => {
  const {
    data: { results }
  } = await apiNotion.post(
    '/databases/d17faf5d8c124793b49931c9a8c733c6/query',
    null,
    {
      headers: {
        'Notion-Version': '2022-06-28'
      }
    }
  )

  const resultFiter = results.map((resource: any) => {
    return {
      id: resource.id,
      name: resource.properties.Name.title[0].plain_text,
      description:
        resource.properties.description.rich_text[0]?.plain_text ||
        'Sin descripción',
      icon: resource.icon.external.url,
      url: resource.properties.URL.url
    }
  })
  console.log(resultFiter)

  return {
    props: { resources: resultFiter }
  }
}
