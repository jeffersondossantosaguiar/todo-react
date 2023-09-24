import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Task } from '../models/Task';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  onCreateTask: (task: Task) => void;
}

export function TaskForm({ onCreateTask }: TaskFormProps) {

  const [taskContent, setTaskContent] = useState('');

  function handletaskContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setTaskContent(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    const task = new Task({ content: taskContent });
    onCreateTask(task);
    setTaskContent('');
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.taskForm}>
      <textarea
        name="task"
        placeholder='Adicione uma nova tarefa'
        value={taskContent}
        onChange={handletaskContentChange}
      />
      <button type='submit'>Criar <AiOutlinePlusCircle size={20} /></button>
    </form>
  );
}