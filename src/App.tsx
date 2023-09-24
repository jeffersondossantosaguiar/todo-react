import { useState } from 'react';
import styles from './App.module.css';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskForm } from './components/TaskForm';
import { TaskHeader } from './components/TaskHeader';
import './global.css';
import { ITask } from './models/Task';

const task: ITask[] = [
  {
    id: "1",
    isChecked: true,
    content: 'Estudar React'
  },
  {
    id: "2",
    isChecked: false,
    content: 'Estudar TypeScript'
  },
  {
    id: "3",
    isChecked: false,
    content: 'Estudar NodeJs'
  }
];

function App() {
  const [tasks, setTasks] = useState(task);
  const [createdTasks, setCreatedTasks] = useState(tasks.length);
  const [completedTasks, setCompletedTasks] = useState(countCheckedTasks(task));

  function createTask(task: ITask) {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setCreatedTasks(newTasks.length);
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(newTasks);
    setCreatedTasks(newTasks.length);
    setCompletedTasks(countCheckedTasks(newTasks));
  }

  function checkTask(id: string) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
        return task;
      }
      return task;
    });

    setTasks(newTasks);
    setCompletedTasks(countCheckedTasks(newTasks));
  }

  function countCheckedTasks(tasks: ITask[]): number {
    return tasks.reduce((acc, task) => task.isChecked ? ++acc : acc, 0);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm onCreateTask={createTask} />
        <main>
          <TaskHeader createdTasks={createdTasks} completedTasks={completedTasks} />
          <div className={styles.task}>
            {
              tasks.length ? (
                tasks.map(task => {
                  return (<Task key={task.id} task={task} onDeleteTask={deleteTask} onCheckTask={checkTask} />);
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
