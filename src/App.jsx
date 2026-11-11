import { useReducer,useState } from "react"
import {Reducer,initialstate} from "./ReactExercises/Exercise18/Reducer"
import ContactForm from "./ReactExercises/Exercise18/ContactForm"
import ContactList from "./ReactExercises/Exercise18/ContactList"
import TodoApp from "./ReactExercises/Exercise19/TodoApp"


const ContactApp = () => {
    const [state,dispatch]= useReducer(Reducer,initialstate)
    const [ editingContact,setEditingContact] = useState(null)
  return (
    <div  className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100">
      <TodoApp/>
      
      <div  className='w-[300px] h-[500px] bg-gradient-to-br from-orange-50 to-rose-100 p-[30px] rounded-lg '>
      
        <h1 className=" font-bold">contact Maangement App</h1>

        <ContactForm

        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact} 

        
        />
        <ContactList 
        contacts={state}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
        
        />


     </div>
    </div>
  )
}

export default ContactApp