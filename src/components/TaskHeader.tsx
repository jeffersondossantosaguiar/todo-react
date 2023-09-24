import styles from './TaskHeader.module.css';

interface TaskHeaderProps {
  createdTasks: number;
}

export function TaskHeader({ createdTasks }: TaskHeaderProps) {
  return (
    <div className={styles.taskHeader}>
      <div >
        <p className={styles.createdTasks}>Tarefas criadas</p>
        <span>
          {createdTasks}
        </span>
      </div>
      <div>
        <p className={styles.concludedTasks}>Concluídas</p>
        <span>
          2 de {createdTasks}
        </span>
      </div>
    </div>
  );
}