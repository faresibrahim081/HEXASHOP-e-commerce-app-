"use client"
import React from 'react'
import styles from './Button.module.css'

function Button() {
  return (
    <div>
      <button 
        className={styles.logout} 
        onClick={() => {
            console.log("logout")
        }}>
          Logout
        </button>
    </div>
  )
}

export default Button
