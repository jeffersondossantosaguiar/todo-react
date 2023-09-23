import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';

export function Task() {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div className={styles.task}>
      <div>
        <input type='checkbox' checked={checked} onChange={handleChecked} className={styles.checkBox} />
      </div>
      <span>
        <label className={checked ? styles.contentChecked : styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur assumenda a repellat, quisquam accusamus alias excepturi?</label>
      </span>
      <button className={styles.trash}>
        <HiOutlineTrash size={16} />
      </button>
    </div>
  );
}