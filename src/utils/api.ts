import axios from 'axios'

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${process.env.ENV_TOKEN_API}`
  }
})

export const apiNotion = axios.create({
  baseURL: `https://api.notion.com/v1`,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${process.env.ENV_TOKEN_NOTION}`
  }
})

export const apiGitHub = axios.create({
  baseURL: `https://api.github.com/users/danielcgilibert`,
  timeout: 5000,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${process.env.ENV_GITHUBTOKEN}`,
    'Content-Type': 'application/json'
  }
})

export const apiBot = axios.create({
  baseURL: `https://api.cohere.ai/v1/classify`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer BnYyKrmBAhZrvCKSujwnTbAoiTfBDt8JXV2au8Yc`,
    'Content-Type': 'application/json'
  }
})

export const apiContribu = axios.create({
  baseURL: `https://github-contributions-api.deno.dev`,
  timeout: 5000
})
