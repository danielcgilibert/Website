export interface IPost {
  id: number
  attributes: PostAttributes
}

export interface PostAttributes {
  name: string
  urlSlug: string
  icon: string
  description: string
  category: Category
}

export interface Category {
  data: Data
}

export interface Data {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  name: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
