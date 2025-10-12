import React from 'react'
import './Search.module.scss'

import styles from './Search.module.scss'

const Search = () => {

  return (
    <div className={styles.container}>
      <input className={styles.root} type="text" placeholder="Поиск пиццы..."/>
      <img
        src="../../../search_icon.svg"
        alt="searchicon"
        width="40"
        height="40"
        loading="eager"
        className={styles.icon}
      />
    </div>
  )
}

export default Search