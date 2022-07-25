import errorMessage from '../../assets/general/error-oops.svg'

import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  return (
    <img className={styles.errorMessage} src={errorMessage} alt='error-message'/>
  )
}

export default ErrorMessage