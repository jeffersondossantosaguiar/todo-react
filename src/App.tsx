import styles from './App.module.css';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskForm } from './components/TaskForm';
import { TaskHeader } from './components/TaskHeader';
import './global.css';

const task = [2];

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm />
        <main>
          <TaskHeader />
          <div className={styles.task}>
            {
              task.length ? (
                <Task />
              ) : (
                <Empty />
              )
            }
          </div>
        </main>

      </div>
    </>
  );
}

export default App;
