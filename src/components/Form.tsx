import styles from './Form.module.css'
import { PlusCircle } from 'phosphor-react';

export function Form() {
  return(
    <div>
      <form action="" className={styles.form}>
        <input type="text" className={styles.input} placeholder="Adicione uma nova tarefa"/>
        <button className={styles.button}> 
          Criar 
          <PlusCircle className={styles.plusCircle}/>
        </button>
      </form>
    </div>
  )
}