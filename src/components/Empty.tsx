import clipBoard from '../assets/clip-board.svg';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.noTask}>
      <img src={clipBoard} alt="Clip board" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );

}