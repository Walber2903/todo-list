import { Trash, CheckCircle } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return(
    <div className={styles.task}>
      <label className={styles.container}>
        <input type='checkbox' />
        <span className={styles.checkmark}></span>
      </label>
      <textarea rows={2} cols={210} readOnly
        value={"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames nao integer."}></textarea>
      <button className={styles.trash} title='Delete task'>
        <Trash size={24} />
      </button>
    </div>
  )
}