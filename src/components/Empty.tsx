import clipboard from '../assets/clipboard.png';
import styles from './Empty.module.css'

export function Empty() {
  return(
    <div className={styles.empty}>
      <img src={clipboard} className={styles.imgTask}/>
      <p className={styles.row1}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.row2}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}