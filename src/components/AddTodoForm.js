import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      task: task,
    };
    dispatch(addTodo(newTodo));
    setTask('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add todo here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodoForm;
