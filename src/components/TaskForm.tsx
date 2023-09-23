import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './TaskForm.module.css';

export function TaskForm() {
  return (
    <form action="" className={styles.taskForm}>
      <textarea name="task" placeholder='Adicione uma nova tarefa' />
      <button>Criar <AiOutlinePlusCircle size={20} /></button>
    </form>
  );
}