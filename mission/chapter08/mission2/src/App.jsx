import './App.css';
import TodoList from './components/todolist/TodoList.jsx';
import TodoDetail from './components/tododetail/TodoDetail.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="container">
            <h1>⚡ UMC Todo List ⚡</h1>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <TodoList />
                        </>
                    }
                />
                <Route path="/todo/:id" element={<TodoDetail />} />
            </Routes>
        </div>
    );
}

export default App;
