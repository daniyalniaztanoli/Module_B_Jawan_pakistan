import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items:[],
    },
    reducers:{
        addTodo: (state, action) =>{
            state.items.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
          },
        },
      });
      
      export const { addTodo, removeTodo } = todoSlice.actions;
      
      export default todoSlice.reducer;