import {ADD_MANTRA} from './actions'


const initialState = {
    mantrasArr: []
}


const mantra = (state = initialState, action) => {
    //const newState = [...state]
    switch (action.type) {
        case ADD_MANTRA:
            return {
               mantrasArr: state.todos.concat(action.payload.mantra)
                
            };
        default: break;
    }
    return state;
};
export default mantra