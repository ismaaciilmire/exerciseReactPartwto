
import todoContext from "./TodoContext"
import { reducer2,initialState2 } from "./Reducer2"
import { useReducer } from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

import backgroundstyle from '../Exercise19/TodoApp.module.css'
const TodoApp = () => {
    const [state,dispatch] = useReducer(reducer2,initialState2)

  return (
    <todoContext.Provider value={{state,dispatch}}>
        <div  className={backgroundstyle.backStyle}>
            <h1 className={backgroundstyle.ciwanka}>TodoApp with Context and Reducer</h1>
             <TodoForm/>
            <TodoList/>
           
            
            
        </div>
       
    </todoContext.Provider>

  )
}

export default TodoApp