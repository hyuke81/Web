import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TodoDetail.css';

const TodoDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:3000/todo/${id}`);
                setTodo(response.data);
            } catch (err) {
                console.error('Error fetching todo:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTodo();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!todo) return <div>No data found</div>;

    return (
        <div className="todo_detail">
            <h2>Todo ID: {todo.id}</h2>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Content:</strong> {todo.content}</p>
            <p><strong>Created At:</strong> {new Date(todo.createdAt).toLocaleString()}</p>
            <p><strong>Status:</strong> {todo.checked ? '완료' : '미완료'}</p>
        </div>
    );
};

export default TodoDetail;
