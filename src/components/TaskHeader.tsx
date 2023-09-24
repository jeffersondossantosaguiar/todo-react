import styles from './TaskHeader.module.css';

interface TaskHeaderProps {
  createdTasks: number;
  completedTasks: number;
}

export function TaskHeader({ createdTasks, completedTasks }: TaskHeaderProps) {
  return (
    <div className={styles.taskHeader}>
      <div >
        <p className={styles.createdTasks}>Tarefas criadas</p>
        <span>
          {createdTasks}
        </span>
      </div>
      <div>
        <p className={styles.completedTasks}>Concluídas</p>
        <span>
          {completedTasks} de {createdTasks}
        </span>
      </div>
    </div>
  );
}