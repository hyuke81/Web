import { useTodos } from '../hook/useTodos';
import Button from './Button';
import Input from './Input';

//useTodos로 가져와 할 일 목록 프린트, 삭제, 수정 처리 로직
const TodoList = () => {
    const {
        todos,
        editingId,
        setEditingId,
        editText,
        setEditText,
        deleteTodo,
        updateTodo,
    } = useTodos();

    return (
        <div className="list">
        {todos.map((todo) => (
            <div key={todo.id} className="todo_list">
            {editingId !== todo.id ? (
                <div className="todo_list_text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
                </div>
            ) : (
                <div className="todo_list">
                <p>{todo.id}.</p>
                <Input
                    defaultValue={todo.task}
                    onChange={(e) => setEditText(e.target.value)}
                    className="todo_input_edit"
                />
                </div>
            )}
            <Button
                onClick={() => deleteTodo(todo.id)}
                text="삭제하기"
                className="delete_button"
            />
            {editingId === todo.id ? (
                <Button
                onClick={() => updateTodo(editingId, editText)}
                text="수정 완료"
                className="edit_button"
                />
            ) : (
                <Button
                onClick={() => setEditingId(todo.id)}
                text="수정 진행"
                className="edit_button"
                />
            )}
            </div>
        ))}
        </div>
    );
};

export default TodoList;
