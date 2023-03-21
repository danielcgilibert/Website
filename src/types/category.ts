export interface ICategory {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}
