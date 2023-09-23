import clipBoard from '../assets/clip-board.svg';
import styles from './Task.module.css';

const tasks = [];

export function Task() {
  if (tasks.length)
    return (<>
      <p>TASKS</p>
    </>);
  else
    return (
      <div className={styles.noTask}>
        <img src={clipBoard} alt="Clip board" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    );
}