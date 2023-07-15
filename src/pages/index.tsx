import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/themeSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const darkThemeEnabled = useSelector(
    (state: RootState) => state.theme.darkThemeEnabled
  );

  const [buttonText, setButtonText] = useState('Светлая версия');

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    setButtonText(darkThemeEnabled ? 'Темная версия 🌜' : 'Светлая версия ☀️');
  };

  return (
    <div className='container mx-auto'>
      <div className={darkThemeEnabled ? 'dark' : ''}>
        <button onClick={handleToggleTheme}>{buttonText}</button>
        <h1 className='font-mono'>Список задач</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
