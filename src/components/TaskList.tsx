import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskList.module.css';
import { Empty } from './Empty';
import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { Itask } from '../App';

interface Props {
  tasks: Itask[];
  onAddTask: (taskTitle: string) => void;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function TaskList({ tasks, onAddTask, onDelete, onComplete }: Props) {

  const tasksQuantity = tasks.length;

  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  
  const[title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);

    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  
  return (
    <div>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="taskValue"
            type="text" className={styles.input} 
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            value={title}
          />
          <button className={styles.button}> 
            Criar 
            <PlusCircle className={styles.plusCircle}/>
          </button>
        </form>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.infoCreated}>Tarefas criadas<span className={styles.tasksCreated}>{tasksQuantity}</span></p>
          <p className={styles.completed}>Concluídas<span className={styles.tasksConcluded}>{completedTasks} de {tasksQuantity}</span></p>
        </div>
        <div className={styles.taskList}>
          
          {tasks.map((task) => {
            return (
              <Task 
                key={task.id} 
                task={task}
                onDelete={onDelete}
                onComplete={onComplete}
              /> 
            )
          })}

          {tasks.length <= 0 && (
            <Empty />
          )}            

        </div>
      </div>  
    </div>
  )
}