import styles from './styles.module.css'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Todo Logo" />
    </header>
  )
}