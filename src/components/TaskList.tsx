import styles from './TaskList.module.css';

import { Empty } from './Empty';
import { Task } from './Task';

export function TaskList() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.infoCreated}>Tarefas criadas<span>Counter</span></p>
        <p className={styles.completed}>Concluídas<span>Counter</span></p>
      </div>
      <div className={styles.taskList}>
        {/* <Empty /> */}
        
        <Task />
        <Task />
        <Task />

      </div>
    </div>
  )
}