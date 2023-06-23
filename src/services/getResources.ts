import { apiNotion } from '@/libs/api'
import { IResource } from '@/types/resource'

export const getResources = async () => {
  try {
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

    return filterResources(results)
  } catch (error) {
    console.log(error)
    return []
  }
}

const filterResources = (results: IResource[]) => {
  return results.map((resource: any) => {
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
}
