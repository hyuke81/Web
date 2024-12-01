import InputTodo from './components/InputTodo.jsx';
import TodoList from './components/TodoList.jsx';

export default function App() {
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '18px', margin: '10px 0' }}>할 일 목록</h2>
            <InputTodo />
            <TodoList />
        </div>
    );
}
