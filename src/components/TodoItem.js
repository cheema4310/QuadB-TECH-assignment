import { useDispatch } from 'react-redux';
import DeleteIcon from '../assets/icons/DeleteIcon';
import { removeTodo } from '../store/todoSlice';

const TodoItem = ({ index, todo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="text-lighter bg-darker p-3 rounded-lg">
      <div className="flex justify-between font-btn">
        <div className="flex-1 text-lg font-medium">{todo.task}</div>
        <div onClick={handleClick} className="cursor-pointer">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
