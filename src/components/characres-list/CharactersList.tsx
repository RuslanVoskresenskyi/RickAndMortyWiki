import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CharacterItem, Loader, ErrorMessage, Pagination, CustomSelect } from '../../components'
import { Character } from '../../types/Character'
import { CharactersInfo } from '../../types/CharactersInfo'
import { getAllCharacters } from '../../services/CharactersService'
import { useAsync } from '../../hooks/useAsync'

import styles from './CharactersList.module.scss'

const genderValues = ['all', 'male', 'female', 'genderless', 'unknown']
const statusValues = ['all', 'alive', 'dead', 'unknown']

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [charactersPage, setCharactersPage] = useState(1)
  const [charactersPagesCount, setCharactersPagesCount] = useState(0)
  const [genderFilter, setGenderFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const { execute, status, value, error } = useAsync<CharactersInfo>(getAllCharacters)
  let navigator = useNavigate()

  useEffect(() => {
    setCharacters(value ? value.results : [])
    setCharactersPagesCount(value ? value.info.pages : 0)
  }, [value])

  useEffect(() => {
    execute([charactersPage, genderFilter, statusFilter])
  }, [charactersPage, genderFilter, statusFilter, execute])

  useEffect(() => {
    if (error) console.log(error)
  }, [error])

  const onChangeFilter = ( e: React.ChangeEvent<HTMLSelectElement>, setFilter: (filter: string) => void ) => {
    setFilter(e.target.value === 'all' ? '' : e.target.value)
  }

  if (status === 'pending') return <Loader/>
  if (status === 'error') return <ErrorMessage/>

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.selectsContainer}>
          <CustomSelect
            labelName='Gender:'
            selectOptions={genderValues}
            defaultValue={genderFilter}
            onChange={e => onChangeFilter(e, setGenderFilter)}
          />
          <CustomSelect
            labelName='Status:'
            selectOptions={statusValues}
            defaultValue={statusFilter}
            onChange={e => onChangeFilter(e, setStatusFilter)}
          />
        </div>
        <div className={styles.contentMain}>
          {characters.map(character => {
            return (
              <CharacterItem
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                gender={character.gender}
                species={character.species}
                location={character.location}
                onClick={() => {navigator(`/characters/${character.id}`)}}
              />
            )
          })}
        </div>
        <Pagination
          pageNumber={charactersPage}
          setPageNumber={setCharactersPage}
          pagesCount={charactersPagesCount}
        />
      </div>
    </div>
  )
}

export default CharactersList