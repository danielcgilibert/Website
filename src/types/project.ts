export interface IProject {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  description: string
  urlCode: string
  urlWeb: null
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  icon: Icon
}

export interface Icon {
  data: Data
}

export interface Data {
  id: number
  attributes: AttributesIcon
}

export interface AttributesIcon {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: null
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

export interface ProviderMetadata {
  public_id: string
  resource_type: string
}
