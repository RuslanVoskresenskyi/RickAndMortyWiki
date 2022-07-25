import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { CharactersList, Header, ErrorMessage } from '../../components'

import rickImg from '../../assets/background/rick.png'
import mortyImg from '../../assets/background/morty.png'

import CharacterPage from '../character-page/CharacterPage'

import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.appContent}>
      <Header/>
      <div className={styles.appContainer}>
        <BrowserRouter>
          <Routes>
            <Route path='/characters' element={<CharactersList/>}/>
            <Route path='/characters/:characterId' element={<CharacterPage/>}/>
            <Route path='/' element={<Navigate to='/characters' replace />}/>
            <Route path='*' element={<ErrorMessage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <img className={styles.appRick} src={rickImg} alt='rick'/>
      <img className={styles.appMorty}  src={mortyImg} alt='morty'/>
    </div>
  )
}

export default App