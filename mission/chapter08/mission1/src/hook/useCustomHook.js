import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomHook = () => {
    const [todos, setTodos] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    // 전체 Todo 목록을 가져오는 함수
    const fetchTodos = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('http://localhost:3000/todo');
            const flattenedTodos = response.data.flat(); // 중첩 배열일 경우 플랫 처리
            setTodos(flattenedTodos);
        } catch (err) {
            console.error('Error fetching todos:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Todo 수정
    const updateTodo = async (id, title = null, content = null, checked = null) => {
        const updatedData = {};
        if (title !== null) updatedData.title = title;
        if (content !== null) updatedData.content = content;
        if (checked !== null) updatedData.checked = checked;
    
        try {
            await axios.patch(`http://localhost:3000/todo/${id}`, updatedData);
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, ...updatedData } : todo
                )
            );
        } catch (err) {
            console.error('Error updating todo:', err);
            setError(err);
        }
    };
    

    // Todo 삭제
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (err) {
            console.error('Error deleting todo:', err);
            setError(err);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos, loading, error, fetchTodos, updateTodo, deleteTodo };
};

export default useCustomHook;
