import { useTodos } from '../hook/useTodos';
import Button from './Button';
import Input from './Input';

//새로운 할 일 등록 로직 
const TodoForm = () => {
    const { text, setText, addTodo } = useTodos();

    return (
        <form onSubmit={(e) => e.preventDefault()} className="input_box">
        <Input
            className="input_holder"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={addTodo} text="할 일 등록" className="put_button" />
        </form>
    );
};

export default TodoForm;
