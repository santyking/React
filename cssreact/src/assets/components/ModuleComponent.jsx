import React from 'react'
import './AppStyles.css'
import styles from './AppStyles.module.css'

function ModuleComponent() {
  return (
    <div>
      <h1 className='success'>Success</h1>
      <h1 className={styles.error}>Error</h1>   
    </div>
  )
}

export default ModuleComponent
