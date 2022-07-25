import React from 'react'

import { Location } from '../../types/Location'

import styles from './CharacterItem.module.scss'

interface Props{
  image: string
  name: string
  status: string
  gender: string
  species: string
  location: Location
  onClick: () => void
}

const CharacterItem: React.FC<Props> = (
  {
    image,
    status,
    name,
    gender,
    species,
    location,
    onClick
  }) => {
  return (
    <div onClick={onClick} tabIndex={0} className={styles.container}>
      <div className={styles.main}>
        <img className={styles.mainImg} src={image} alt={name}/>
        <p className={styles.mainName}>{name}</p>
        <p className={styles.mainStatus}>{status}</p>
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionPoint}>Gender: {gender}</p>
        <p className={styles.descriptionPoint}>Species: {species}</p>
        <p className={styles.descriptionPoint}>Location: {location.name}</p>
      </div>

    </div>
  )
}

export default CharacterItem