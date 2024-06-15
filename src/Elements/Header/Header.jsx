import styles from './Header.module.css'

function Header({info}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.tag}>
        {info}😘
      </h1>
    </div>
  )
}

export default Header
