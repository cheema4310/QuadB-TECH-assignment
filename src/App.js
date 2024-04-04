import AddTodoForm from './components/AddTodoForm';
import DisplayTodos from './components/DisplayTodos';
function App() {
  return (
    <div className="bg-darkest w-full h-screen">
      <div className="grid place-items-center grid-rows-[auto_auto_1fr]">
        <h2 className="py-4 text-4xl text-light font-modern font-bold cursor-default">
          Todo Hub
        </h2>
        <AddTodoForm />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
