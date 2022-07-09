import { Header } from './components/Header'

import styles from './App.module.css';
import './global.css'
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';


function App() {

  return (
    <div>
      <header>
        <Header />
        <div className={styles.wrapper}>
          <Form />
        </div>
        </header>

        <main>
          <TaskList />
        </main>
    </div>
  )
}

export default App
