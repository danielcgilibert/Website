import { api } from '@/libs/api'

export const getCategories = async () => {
  try {
    const {
      data: { data: categories }
    } = await api.get('/categories')

    return categories
  } catch (error) {
    console.log(error)
    return []
  }
}
