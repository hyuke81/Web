import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomHook from '../../hook/useCustomHook';
import './TodoList.css';

const TodoList = () => {
    const { todos, loading, error, updateTodo, deleteTodo } = useCustomHook();
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const navigate = useNavigate();

    // 수정 버튼 클릭 시 수정 상태로
    const handleEdit = (id, title, content) => {
        setEditingId(id);
        setEditTitle(title);
        setEditContent(content);
    };

    // 수정 완료
    const handleUpdate = async (id) => {
        await updateTodo(id, editTitle, editContent);
        setEditingId(null);
    };

    // 삭제 버튼 클릭
    const handleDelete = async (id) => {
        await deleteTodo(id);
    };

    // 상세 페이지로 이동
    const handleDetail = (id) => {
        navigate(`/todo/${id}`);
    };

    // 완료 상태 업데이트
    const handleCheck = async (id, checked) => {
        await updateTodo(id, null, null, !checked); // checked 상태
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="list">
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="todo_list"
                    onClick={() => handleDetail(todo.id)} // 상세 페이지로 이동
                >
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={(e) => {
                            e.stopPropagation(); // 클릭 이벤트 버블링 방지
                            handleCheck(todo.id, todo.checked);
                        }}
                        className="todo_checkbox"
                    />
                    {editingId === todo.id ? (
                        <div className="todo_text">
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
                                    e.stopPropagation(); // 클릭 이벤트 버블링 방지
                                    handleUpdate(todo.id);
                                }}
                            >
                                저장
                            </button>
                            <button
                                className="cancel_button"
                                onClick={(e) => {
                                    e.stopPropagation(); // 클릭 이벤트 버블링 방지
                                    setEditingId(null);
                                }}
                            >
                                취소
                            </button>
                        </div>
                    ) : (
                        <div className="todo_text">
                            <p
                                className={`todo_title ${
                                    todo.checked ? 'todo_completed' : ''
                                }`}
                            >
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
                                    e.stopPropagation(); // 클릭 이벤트 버블링 방지
                                    handleEdit(todo.id, todo.title, todo.content);
                                }}
                            >
                                수정
                            </button>
                            <button
                                className="delete_button"
                                onClick={(e) => {
                                    e.stopPropagation(); // 클릭 이벤트 버블링 방지
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
    );
};

export default TodoList;
