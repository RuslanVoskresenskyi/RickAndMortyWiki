import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAsync } from '../../hooks/useAsync'
import { Character } from '../../types/Character'
import { getCharacter } from '../../services/CharactersService'
import { ErrorMessage, Loader } from '../index'
import episodeBackground from '../../assets/background/episode-background.jpg'

import styles from './CharacterPage.module.scss'


const CharacterPage: React.FC = () => {
  const { characterId } = useParams()
  const [character, setCharacter] =useState<Character | null>(null)
  const [isShowEpisodes, setIsShowEpisodes] = useState(5)

  const { execute, status, value, error } = useAsync<Character>(getCharacter)

  useEffect(() => {
    setCharacter(value ? value : null)
  }, [value])

  useEffect(() => {
    execute([characterId])
  }, [characterId])

  useEffect(() => {
    if (error) console.log(error)
  }, [error])

  if (status === 'pending') return <Loader/>
  if (status === 'error') return <ErrorMessage/>

  return (
    <>
      {character ? <div className={styles.container}>
        <div className={styles.main}>
          <img src={character.image} alt={character.name}/>
          <div>
            <p className={styles.mainPoint}>Name: {character.name}</p>
            <p className={styles.mainPoint}>Gender: {character.gender}</p>
            <p className={styles.mainPoint}>Species: {character.species}</p>
            <p className={styles.mainPoint}>Location: {character.location.name}</p>
            <p className={styles.mainPoint}>Status: {character.status}</p>
          </div>
        </div>
        <h2 className={styles.episodesTitle}>Episodes with this character</h2>
        <div className={styles.episodes}>
          {character.episode.map((episode, i) => {
            if(i < isShowEpisodes){
              return (
                <div key={i} className={styles.episode}>
                  <img src={episodeBackground} alt='episode-background'/>
                  <span>{episode.slice(40)}</span>
                </div>
              )
            }
          })}
        </div>
        <button
          disabled={isShowEpisodes > character.episode.length}
          className={styles.pagination}
          onClick={() => {setIsShowEpisodes(isShowEpisodes + 5)}}
        >
          Show more episode
        </button>
      </div> : <ErrorMessage/>}
    </>
  )
}

export default CharacterPage