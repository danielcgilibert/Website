import { api } from '@/libs/api'
import { ISnippet } from '@/types/snippet'

export const getSnippets = async (route: string) => {
  try {
    const {
      data: { data: snippets }
    } = await api.get(route)

    return snippets
  } catch (error) {
    console.log(error)
    return []
  }
}

const filterSnippets = (snippets: ISnippet[]) => {
  return snippets.map((snippet: ISnippet) => {
    return {
      id: snippet.id,
      attributes: {
        ...snippet.attributes
      }
    }
  })
}
