import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { useState } from 'react';

const DisplayTodos = () => {
  const todos = useSelector((state) => state.todo);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 8;

  // create a copy of todos and reverse it
  const reversedTodos = [...todos].reverse();

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = reversedTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageCount = Math.ceil(reversedTodos.length / todosPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const showPagination = reversedTodos.length > 7;

  return (
    <div className="w-full pt-6 border-t-[1px] border-darker grid grid-rows-[1fr_auto] h-full">
      <div className="w-3/4 mx-auto py-6 grid lg:grid-cols-2 gap-2 h-fit">
        {currentTodos.map((todo, index) => (
          <TodoItem key={todo.id} index={index} todo={todo} />
        ))}
      </div>

      {showPagination && (
        <div className="flex justify-center items-center py-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mx-1 px-3 py-1 text-lighter border-[1px] border-dark rounded ${
                currentPage === number ? 'bg-darkest text-light' : 'bg-dark'
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayTodos;
