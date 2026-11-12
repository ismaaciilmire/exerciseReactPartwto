import React, {useContext}from 'react'
import todoContext from "./TodoContext"





const TodoItem = ({todo}) => {

  const {dispatch} = useContext(todoContext)
  return (
    <li>
        <span className='text-2xl '
        onClick={()=>dispatch({type: 'toggle', payload: todo.id})}
         style={{textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer'}}
        >{todo.text}</span>

        <button onClick={()=>dispatch({type: 'delete', payload: todo.id})}className='text-red-800 text-xl font-bold ml-4'>Delete</button>
    </li>
  )
}

export default TodoItem