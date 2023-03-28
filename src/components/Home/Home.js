import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.intro_container}></div>
      <div className={styles.photo_container}></div>
    </div>
  )
}

export default Home