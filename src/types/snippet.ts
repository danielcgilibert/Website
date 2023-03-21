export interface ISnippet {
  id: number
  attributes: SnippetAttributes
}

export interface SnippetAttributes {
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  content: string
  urlSlug: string
  icon: Icon
}

export interface Icon {
  data: Data
}

export interface Data {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  name: string
  alternativeText: null
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  small: Small
  thumbnail: Small
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}
