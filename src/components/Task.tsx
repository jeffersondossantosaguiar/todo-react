import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';

export interface ITask {
  id: number,
  content: string,
  isChecked: boolean;
}

interface ITaskProps {
  task: ITask,
  onDeleteTask: (key: number) => void;
}

export function Task({ task, onDeleteTask }: ITaskProps) {
  const { content, id, isChecked } = task;
  const [checked, setChecked] = useState(isChecked);

  function handleChecked() {
    setChecked(!checked);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <div>
        <input type='checkbox' checked={checked} onChange={handleChecked} className={styles.checkBox} />
      </div>
      <span>
        <label className={checked ? styles.contentChecked : styles.content}>{content}</label>
      </span>
      <button onClick={handleDeleteTask} className={styles.trash}>
        <HiOutlineTrash size={16} />
      </button>
    </div>
  );
}