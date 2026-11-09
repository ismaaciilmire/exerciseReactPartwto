export const initialstate=[];

export const Reducer=(state,action)=>{
    switch(action.type){
        case 'add':
            return [...state,action.payload];
            case 'edit':
                return state.map((contact)=>
                     contact.id === action.payload.id ? action.payload : contact);
                case 'delete':
                    return state.filter((contact) => contact.id !== action.payload);
                    case 'toggleFavorate':
                        return state.map((contact)=>
                        contact.id === action.payload ? {...contact, favorite: !contact.favorite}: contact)


    }

}