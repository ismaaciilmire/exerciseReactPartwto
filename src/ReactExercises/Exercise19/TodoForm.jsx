import React,{useState,useContext} from 'react'
import todoContext from './TodoContext';
import Styling from '../Exercise19/TodoForm.module.css'


const TodoForm = () => {
   const [text, setText] = useState('');
  const { dispatch } = useContext(todoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div >
      <input className={Styling.inputStyle} 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button  className={Styling.buttonStyle} onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoForm