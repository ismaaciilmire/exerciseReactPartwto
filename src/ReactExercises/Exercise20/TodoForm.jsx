import React,{useState,useContext} from 'react'
import todoContext from './TodoContext';



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
      <input className='bg-gray-100 p-2 rounded '
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className='bg-green-600 p-2 rounded text-white'   onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoForm