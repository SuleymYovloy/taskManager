import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../redux/tasksSlice';
import { Task } from '../redux/types';

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  const handleTaskClick = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={handleTaskClick}
    >
      {task.text}
      <button className='add' onClick={handleRemoveTask}>❌</button>
    </li>
  );
};

export default TaskItem;
