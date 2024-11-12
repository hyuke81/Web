import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, task: '투두 만들어보기' },
        { id: 2, task: '소현' },
    ]);

    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    // 추가
    const addTodo = () => {
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) + 2, task: text },
        ]);
        setText('');
    };

    // 삭제
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    // 수정
    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId(null);
    };

    return (
        <TodoContext.Provider
            value={{
                todos, //현재 할 일 목록
                text, //새로운 할 일 추가
                setText, //상태 업데이트
                editingId, //현재 수정 중인 할 일의 id
                setEditingId,
                editText, //수정 중인 할 일 새로운 내용
                setEditText,
                addTodo, //추가
                deleteTodo, //삭제
                updateTodo, //수정
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TodoContext;