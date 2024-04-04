import { createSlice } from '@reduxjs/toolkit';

// get stored todos from localstorage to persist the state of todos
const loadState = () => {
  const todosInStorage = window.localStorage.getItem('todos');
  if (todosInStorage === null) {
    return [];
  }
  return JSON.parse(todosInStorage);
};
const savedTodos = loadState();

// create slice
const todoSlice = createSlice({
  initialState: savedTodos,
  name: 'todo',
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.push({
        id: newTodo.id,
        task: newTodo.task,
      });

      // saving todo in localStorage
      window.localStorage.setItem('todos', JSON.stringify(state));
    },
    removeTodo(state, action) {
      const todoId = action.payload;
      const updatedState = state.filter((todo) => todo.id !== todoId);

      // remove todo from localStorage
      window.localStorage.setItem('todos', JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
