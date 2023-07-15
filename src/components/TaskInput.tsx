import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { Task } from '../redux/types';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTaskText('');
  };

  return (
    <div className='flex'>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={taskText} onChange={handleInputChange} />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded add' onClick={handleAddTask}>Добавить</button>
    </div>
  );
};

export default TaskInput;
