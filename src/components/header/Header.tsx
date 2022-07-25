import headerLogo from '../../assets/header/rick-and-morty-logo.png'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={headerLogo} alt='header-logo'/>
      {/*<ul className={styles.nav}>*/}
      {/*  <li className={styles.navItem}><a>Characters</a></li>*/}
      {/*  <li className={styles.navItem}><a>Locations</a></li>*/}
      {/*  <li className={styles.navItem}><a>Episodes</a></li>*/}
      {/*</ul>*/}
    </div>
  )
}

export default Header