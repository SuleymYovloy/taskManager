import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import themeReducer from './themeSlice'; // Добавьте эту строку

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer, // Добавьте эту строку
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
