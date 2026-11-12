
import todoContext from "./TodoContext"
import { reducer2,initialState2 } from "./Reducer2"
import { useReducer } from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"


const TodoApp = () => {
    const [state,dispatch] = useReducer(reducer2,initialState2)

  return (
    <todoContext.Provider value={{state,dispatch}}>
        <div className="bg-white w-[300px] h-[400px] p-4 ml-4 mt-4 rounded" >
            <h1  className="text-3xl font-bold p-3">My Todo List</h1>
             <TodoForm/>
            <TodoList/>
           
            
            
        </div>
       
    </todoContext.Provider>

  )
}

export default TodoApp