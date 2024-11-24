import { useState } from 'react';
import axios from 'axios';
import './TodoForm.css';

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 새로운 todo 추가 요청
    const handleSubmit = async (e) => {
        e.preventDefault();
        const todo = { title, content };

        try {
            await axios.post('http://localhost:3000/todo', todo); // API 호출
            setTitle('');
            setContent('');
            console.log('Todo added:', todo);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input_box">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력해주세요"
                className="input_holder"
            />
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 입력해주세요"
                className="input_holder"
            />
            <button
                type="submit"
                className="put_button"
                disabled={!title.trim() || !content.trim()}
            >
                ToDo 생성
            </button>
        </form>
    );
};

export default TodoForm;
