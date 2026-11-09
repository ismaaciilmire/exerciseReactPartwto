import { useReducer,useState } from "react"
import {Reducer,initialstate} from "./ReactExercises/Exercise18/Reducer"
import ContactForm from "./ReactExercises/Exercise18/ContactForm"
import ContactList from "./ReactExercises/Exercise18/ContactList"


const ContactApp = () => {
    const [state,dispatch]= useReducer(Reducer,initialstate)
    const [ editingContact,setEditingContact] = useState(null)
  return (
    <div >
        <h1>contact Maangement App</h1>

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
  )
}

export default ContactApp