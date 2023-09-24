import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { ITask } from '../models/Task';
import styles from './Task.module.css';

interface ITaskProps {
  task: ITask,
  onDeleteTask: (key: string) => void;
  onCheckTask: (key: string) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: ITaskProps) {
  const { content, id, isChecked } = task;
  const [checked, setChecked] = useState(isChecked);

  function handleCheckTask() {
    onCheckTask(id);
    setChecked(!checked);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <div>
        <input type='checkbox' checked={checked} onChange={handleCheckTask} className={styles.checkBox} />
        <label className={checked ? styles.contentChecked : styles.content}>{content}</label>
      </div>
      <button onClick={handleDeleteTask} className={styles.trash}>
        <HiOutlineTrash size={16} />
      </button>
    </div>
  );
}