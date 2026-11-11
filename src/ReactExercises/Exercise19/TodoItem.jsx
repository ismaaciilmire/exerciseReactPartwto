import React, {useContext}from 'react'
import todoContext from "./TodoContext"
import styling from '../Exercise19/TodoForm.module.css'




const TodoItem = ({todo}) => {

  const {dispatch} = useContext(todoContext)
  return (
    <li>
        <span
        onClick={()=>dispatch({type: 'toggle', payload: todo.id})}
         style={{textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer'}}
        >{todo.text}</span>

        <button onClick={()=>dispatch({type: 'delete', payload: todo.id})}className={styling.Deletestyle}>Delete</button>
    </li>
  )
}

export default TodoItem