import { Trash, CheckCircle } from 'phosphor-react';
import { Itask } from '../App';
import styles from './Task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface Props {
  task: Itask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return(
    <div className={styles.list} >
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <textarea 
        className={task.isCompleted ? styles.textCompleted : ""} 
        rows={2} cols={210} 
        readOnly 
        value={task.title}>
      </textarea>
      <button className={styles.trash} title='Delete task' onClick={() => onDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}