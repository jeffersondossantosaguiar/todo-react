import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskHeader } from './components/TaskHeader';
import './global.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TaskForm />
        <main>
          <TaskHeader />
        </main>

      </div>
    </>
  );
}

export default App;
