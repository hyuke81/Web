import './App.css';
import TodoList from './components/todolist/TodoList.jsx';
import TodoForm from './components/todoform/TodoForm.jsx';
import TodoDetail from './components/tododetail/TodoDetail.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="container">
                <h1>⚡ UMC Todo List ⚡</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <TodoForm />
                                <TodoList />
                            </>
                        }
                    />
                    <Route path="/todo/:id" element={<TodoDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
