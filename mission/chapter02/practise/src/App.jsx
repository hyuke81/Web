import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '소현' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, task: text } : item
      )
    );
    setEditingId(null);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="input_box">
        <Input
          className="input_holder"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={() => addTodo()} text="할 일 등록" className="put_button" />
      </form>

      <div className="list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo_list">
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div className="todo_list_text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중일 때 */}
            {editingId === todo.id && (
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
    </div>
  );
}

export default App;
