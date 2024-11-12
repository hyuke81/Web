import './App.css';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
