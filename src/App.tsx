import { useState } from 'react';
import styles from './App.module.css';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { ITask, Task } from './components/Task';
import { TaskForm } from './components/TaskForm';
import { TaskHeader } from './components/TaskHeader';
import './global.css';

const task: ITask = {
  id: 1,
  isChecked: true,
  content: 'Estudar React'
};

function App() {
  const [tasks, setTasks] = useState([task]);
  const [createdTasks, setCreatedTasks] = useState(tasks.length);

  function deleteTask(id: number) {
    const newTasks = tasks.filter(task => {
      return task.id !== id;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm />
        <main>
          <TaskHeader createdTasks={createdTasks} />
          <div className={styles.task}>
            {
              tasks.length ? (
                tasks.map(task => {
                  return (<Task key={task.id} task={task} onDeleteTask={deleteTask} />);
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
