import { IPost } from '@/types/post'
import { api } from '@/libs/api'

export const getPosts = async (route: string) => {
  try {
    const {
      data: { data: posts }
    } = await api.get(route)

    return posts
  } catch (error) {
    console.log(error)
    return []
  }
}

const filterPosts = (posts: IPost[]) => {
  return posts.map((post: any) => {
    const {
      id,
      attributes: {
        name,
        urlSlug,
        icon,
        description,
        category,
        images,
        publishedAt
      }
    } = post
    return {
      id,
      attributes: {
        name,
        urlSlug,
        icon: icon.data.attributes.url,
        description,
        category,
        images,
        publishedAt
      }
    }
  })
}
