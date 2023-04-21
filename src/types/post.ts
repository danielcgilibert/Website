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
  images: Images
  publishedAt: Date
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

export interface Images {
  data: Datum
}

export interface Datum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  large: Large
  small: Large
  medium: Large
  thumbnail: Large
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}
