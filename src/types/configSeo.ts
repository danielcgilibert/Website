export interface ConfigSEO {
  title: string
  description: string
  openGraph: OpenGraph
}

interface OpenGraph {
  url: string
  type: string
  title: string
  description: string
  images: Image[]
  defaultImageHeight: number
  defaultImageWidth: number
  locale: string
  site_name: string
}

interface Image {
  url: string
  width: number
  height: number
  alt: string
}
