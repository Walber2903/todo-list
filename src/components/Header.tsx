import styles from './Header.module.css'
import todoLogo from '../assets/rocketTodoLogo.png'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={todoLogo} alt='Logo do todo-list' />
      <strong className={styles.to}>to</strong><strong className={styles.do}>do</strong>
    </header>
  )
}