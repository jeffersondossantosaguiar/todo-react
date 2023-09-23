import styles from './TaskHeader.module.css';

export function TaskHeader() {
  return (
    <div className={styles.taskHeader}>
      <div >
        <p className={styles.createdTasks}>Tarefas criadas</p>
        <span>
          5
        </span>
      </div>
      <div>
        <p className={styles.concludedTasks}>Concluídas</p>
        <span>
          2 de 5
        </span>
      </div>
    </div>
  );
}