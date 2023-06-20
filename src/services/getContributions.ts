import { apiContribu } from '@/libs/api'

export const getContributions = async () => {
  try {
    const {
      data: { totalContributions }
    } = await apiContribu.get('/danielcgilibert.json')

    return totalContributions
  } catch (error) {
    console.log(error)
    return 0
  }
}
