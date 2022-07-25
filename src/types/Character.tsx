import { Location } from './Location'

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  location: Location
  image: string
  episode: string[]
}

