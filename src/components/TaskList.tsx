import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (showCompleted && showIncomplete) {
      return true;
    } else if (showCompleted) {
      return task.completed;
    } else if (showIncomplete) {
      return !task.completed;
    }
    return false;
  });

  const handleShowCompletedChange = () => {
    setShowCompleted(!showCompleted);
  };

  const handleShowIncompleteChange = () => {
    setShowIncomplete(!showIncomplete);
  };

  return (
    <div>
      <div className="md:flex md:items-left mb-3 mt-3">
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            checked={showCompleted}
            onChange={handleShowCompletedChange}
            className="mr-2 leading-tight"
            type="checkbox"
          />
          <span className="text-sm">Показывать только выполненные задачи</span>
        </label>
      </div>

      <div className="md:flex md:items-left mb-6">
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            checked={showIncomplete}
            onChange={handleShowIncompleteChange}
            className="mr-2 leading-tight"
            type="checkbox"
          />
          <span className="text-sm">Показывать только невыполненные задачи</span>
        </label>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

