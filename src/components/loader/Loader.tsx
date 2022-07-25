import portalLoader from '../../assets/general/portla-loader.png'

import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <img className={styles.portalLoader} src={portalLoader} alt='portal-loader'/>
  )
}

export default Loader