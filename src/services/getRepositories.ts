import { apiGitHub } from '@/libs/api'

export const getRepositories = async () => {
  try {
    const { data: repositories } = await apiGitHub.get('/repos')
    return repositories.length
  } catch (error) {
    console.log(error)
    return 0
  }
}
