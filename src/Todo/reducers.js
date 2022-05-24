import { CREATE_TODO , REMOVE } from "./actions";


export const todos = (state = [], action) => {
     
    const {type, payload} = action;
    switch ( type ) {
        case CREATE_TODO : {
            const {text} = payload
            const newTodo = {
                text,
                isCompleted:false,
            };
            return state.concat(newTodo);
        }

        case REMOVE : {
            const {text} = payload
            return state.filter(s => s.text !== text)
        }
    
    default: {
        return state;

    }
}  

}