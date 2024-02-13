import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../pages/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});