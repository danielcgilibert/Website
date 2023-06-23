import { api } from '@/libs/api'

export const getProjects = async (route: string) => {
  try {
    const {
      data: { data: projects }
    } = await api.get(route)

    return projects
  } catch (error) {
    console.log(error)
    return []
  }
}
