import AddTodoForm from './components/AddTodoForm';
import DisplayTodos from './components/DisplayTodos';
function App() {
  return (
    <div className="p-10">
      <h2>Your Todo Dashboard</h2>
      <AddTodoForm />
      <DisplayTodos />
    </div>
  );
}

export default App;
