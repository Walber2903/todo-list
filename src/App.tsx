import { Header } from './components/Header'
import { TaskList } from './components/TaskList';
import { useState } from 'react';

import './global.css'

export interface Itask {
  id: string;
  title: string;
  isCompleted: boolean;
} 

function App() {

  const [tasks, setTasks] = useState<Itask[]>([])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function isTaskCompletedById(taskId: string) {
    const newTask = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted,
        }
      }
      return task;
    })
    setTasks(newTask);
  }

  return (

    <div>
      <header>
        <Header />
      </header>

      <main>
        <TaskList 
          tasks={tasks} 
          onAddTask={addTask} 
          onDelete={deleteTaskById}
          onComplete={isTaskCompletedById}
        />
      </main>
    </div>
  )
}

export default App
