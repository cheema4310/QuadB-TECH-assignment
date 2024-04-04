import { useDispatch } from 'react-redux';
import DeleteIcon from '../assets/icons/DeleteIcon';
import { doneTodo, removeTodo } from '../store/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelClick = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleCompletedClick = () => {
    dispatch(doneTodo(todo.id));
  };
  return (
    <div
      className={`${
        todo.completed ? 'bg-dark' : 'bg-darker'
      } p-3 rounded-lg text-lighter`}
    >
      <div className="flex font-btn">
        <div
          className={`flex-1 text-xl font-medium ${
            todo.completed && 'line-through text-darkest'
          }`}
        >
          {todo.task}
        </div>
        <div className="flex justify-center items-center gap-3">
          <div onClick={handleCompletedClick} className="cursor-pointer">
            <div
              className={`border-[3px] border-light w-5 h-5 rounded-md  ${
                todo.completed ? 'bg-darkest' : 'bg-light'
              }`}
            ></div>
          </div>
          <div onClick={handleDelClick} className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
