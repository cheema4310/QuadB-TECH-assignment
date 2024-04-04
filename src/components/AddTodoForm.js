import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import AddIcon from '../assets/icons/AddIcon';

const AddTodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      task: task,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTask('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2 py-10 w-full"
    >
      <div className="w-2/5">
        <input
          type="text"
          placeholder="add todo here..."
          value={task}
          autoFocus
          onChange={(e) => setTask(e.target.value)}
          className="leading-[3rem] w-full text-xl text-lighter placeholder:text-light font-medium font-modern outline-none px-2 rounded-lg bg-darker"
        />
      </div>

      <button type="submit" className="leading-[3rem]">
        <AddIcon />
      </button>
    </form>
  );
};

export default AddTodoForm;
