import { useSelector } from 'react-redux';
const DisplayTodos = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="p-20">
      {todos.map((todo) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
};

export default DisplayTodos;
