import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import AddIcon from '../assets/icons/AddIcon';

const AddTodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // add todo
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
      className="flex justify-center items-center gap-2 py-10 mx-auto w-5/6 lg:w-2/5"
    >
      <div className="w-full">
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
