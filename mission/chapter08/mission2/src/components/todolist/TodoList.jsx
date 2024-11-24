import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import './TodoList.css';

// API 요청 함수
const fetchTodos = async () => {
    try {
        const response = await axios.get('http://localhost:3000/todo');
        console.log('Fetched Todos:', response.data); 

        // 데이터가 배열로 감싸져 있다면 첫 번째 요소만 반환
        if (Array.isArray(response.data) && Array.isArray(response.data[0])) {
            return response.data[0];
        }

        return response.data; // 기본 반환
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

const TodoApp = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    // GET: Todos 가져오기
    const { data: todos = [], isLoading, isError, error } = useQuery({
        queryKey: ['todos'], // 고유한 쿼리 키 설정
        queryFn: fetchTodos, 
    });

    // POST: Todo 추가
    const addTodoMutation = useMutation({
        mutationFn: async (newTodo) => {
            const response = await axios.post('http://localhost:3000/todo', newTodo);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] }); 
            setTitle('');
            setContent('');
        },
    });

    // PATCH: Todo 수정
    const updateTodoMutation = useMutation({
        mutationFn: async ({ id, title, content, checked }) => {
            const response = await axios.patch(`http://localhost:3000/todo/${id}`, {
                title,
                content,
                checked,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            setEditingId(null);
        },
    });

    // DELETE: Todo 삭제
    const deleteTodoMutation = useMutation({
        mutationFn: async (id) => {
            await axios.delete(`http://localhost:3000/todo/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 입력해주세요.');
            return;
        }
        addTodoMutation.mutate({ title, content });
    };

    // 수정 버튼
    const handleEdit = (id, title, content) => {
        setEditingId(id);
        setEditTitle(title);
        setEditContent(content);
    };

    const handleUpdate = (id) => {
        if (!editTitle.trim() || !editContent.trim()) {
            alert('제목과 내용을 입력해주세요.');
            return;
        }
        updateTodoMutation.mutate({ id, title: editTitle, content: editContent });
    };

    // 삭제
    const handleDelete = (id) => {
        deleteTodoMutation.mutate(id);
    };

    // 체크박스 상태 업데이트
    const handleCheck = (id, checked) => {
        updateTodoMutation.mutate({ id, checked: !checked });
    };

    // 상세 페이지 이동
    const handleDetail = (id) => {
        navigate(`/todo/${id}`);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="todo_container">
            <form onSubmit={handleAddTodo} className="input_box">
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
                    Todo 생성
                </button>
            </form>

            <div className="list">
                {todos.map((todo, index) => (
                    <div
                        key={todo.id || `todo-${index}`} 
                        className="todo_list"
                        onClick={() => handleDetail(todo.id)}
                    >
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={(e) => {
                                e.stopPropagation();
                                handleCheck(todo.id, todo.checked);
                            }}
                            className="todo_checkbox"
                        />
                        {editingId === todo.id ? (
                            <div
                                className="todo_text"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className="todo_input"
                                />
                                <input
                                    type="text"
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                    className="todo_input"
                                />
                                <button
                                    className="save_button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleUpdate(todo.id);
                                    }}
                                >
                                    저장
                                </button>
                                <button
                                    className="cancel_button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setEditingId(null);
                                    }}
                                >
                                    취소
                                </button>
                            </div>
                        ) : (
                            <div className="todo_text">
                                <p className={`todo_title ${todo.checked ? 'todo_completed' : ''}`}>
                                    {todo.title}
                                </p>
                                <p className="todo_content">{todo.content}</p>
                            </div>
                        )}
                        {editingId !== todo.id && (
                            <>
                                <button
                                    className="edit_button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEdit(todo.id, todo.title, todo.content);
                                    }}
                                >
                                    수정
                                </button>
                                <button
                                    className="delete_button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(todo.id);
                                    }}
                                >
                                    삭제
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoApp;
