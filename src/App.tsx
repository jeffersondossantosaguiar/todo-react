import styles from './App.module.css';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskForm } from './components/TaskForm';
import { TaskHeader } from './components/TaskHeader';
import './global.css';

const tasks = [1, 2, 3, 4];

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
              tasks.length ? (
                tasks.map(task => {
                  return (<Task key={task} />);
                })
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
