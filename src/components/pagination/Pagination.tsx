import React, { useEffect, useState } from 'react'

import styles from './Pagination.module.scss'

interface Props {
  pageNumber: number
  setPageNumber: (pageNumber: number) => void
  pagesCount: number
}

const Pagination: React.FC<Props> = ({ pageNumber, setPageNumber, pagesCount }) => {
  const [nextPageDisabled, setNextPageDisable] = useState(false)
  const [previousPageDisabled, setPreviousPageDisable] = useState(false)

  const nextPage = () => {
    setPreviousPageDisable(false)
    setPageNumber(pageNumber + 1)
  }

  const previousPage = () => {
    setNextPageDisable(false)
    setPageNumber(pageNumber - 1)
  }

  useEffect(() =>{
    if(pageNumber === 1){setPreviousPageDisable(true)}
    if(pageNumber === pagesCount){setNextPageDisable(true)}
  }, [pageNumber, pagesCount])

  return (
    <div className={styles.buttons}>
      <button disabled={previousPageDisabled} onClick={previousPage}>Previous Page</button>
      <button disabled={nextPageDisabled} onClick={nextPage}>Next Page</button>
    </div>
  )
}

export default Pagination