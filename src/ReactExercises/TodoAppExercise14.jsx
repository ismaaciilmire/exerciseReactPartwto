import React, { useReducer, useState } from 'react'

const initialstatet = [];

const REDucer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "togale":
           return state.map((todo)=> todo.id === action.payload ? {...todo,complete: !complete.id}: todo);
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;

    }

}

function TodoAppExercise14() {

    const [state, dispatch] = useReducer(REDucer, initialstatet);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim()) {

            const newTOdo = {
                id: Date.now(),
                text,
                complete: false,
            }

            dispatch({ type: 'add', payload: newTOdo })

            setText('');
        }
    }
    return (
        <div  className='bg-amber-200 w-[400px] h-[500px] ml-10 p-8'>
            <h1 className='text-gray-700 font-bold text-3xl m-4'>Todo app Application</h1>
            <input className='bg-gray-100 border-2' type="text"
                value={text} onChange={(e) => setText(e.target.value)}
                placeholder='enter new todo'

            />
            
             <button className=' bg-blue-800 text-white rounded-lg p-2' onClick={handleAdd}>add</button>
            <ul >
                {
                    state.map((todo) => (
                        <li key={todo.id}>
                            <span
                             
                             style={{
                                textDecoration: todo.complete? "line-through" : "none"

                             }}
                            
                            onClick={()=> dispatch({type: 'togale', payload: todo.id})  }
                            >
                             {todo.text}</span>
                           

                           <button className='bg-red-600 text-white rounded-lg p-2 ml-6' onClick={()=>dispatch({type: 'delete', payload: todo.id})}>delete</button>
                        </li>
                    ))
                }


            </ul>

        </div>
    )
}

export default TodoAppExercise14