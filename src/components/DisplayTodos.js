import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
const DisplayTodos = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className="w-full pt-16 border-t-[1px] border-darker">
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-2">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default DisplayTodos;
