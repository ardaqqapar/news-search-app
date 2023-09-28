'use client';

import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  return (
    <button className={styles.backButton} onClick={()=>window.history.back()}>Back</button>
  )
}

export default Button