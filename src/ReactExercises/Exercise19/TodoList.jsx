import React,{useContext} from 'react'
import todoContext from './TodoContext'
import TodoItem from './TodoItem'

const TodoList = () => {
    const {state} = useContext(todoContext)

  return (
    <div>
        <ul>
            {
                state.map((todo) =>(
                    <TodoItem key={todo.id} todo={todo}/>

                ))
            }
        </ul>
    </div>
  )
}

export default TodoList