import { CharactersInfo } from '../types/CharactersInfo'
import { Character } from '../types/Character'

import { getResource } from './index'


export const getAllCharacters = async (
  characterPage: number = 1,
  genderFilter: string,
  statusFilter: string
): Promise<CharactersInfo> => {
  return await getResource<CharactersInfo>(
    `${process.env.REACT_APP_API_BASE}character?page=${characterPage}&gender=${genderFilter}&status=${statusFilter}`
  )
}

export const getCharacter = async ( characterId: number ): Promise<Character> => {
  return await getResource<Character>(
    `${process.env.REACT_APP_API_BASE}character/${characterId}`
  )
}

