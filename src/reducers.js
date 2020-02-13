import {ADD_MANTRA} from './actions'


const initialState = {
    mantras: []
}


const mantra = (state = initialState, action) => {
    //const newState = [...state]
    switch (action.type) {
        case ADD_MANTRA:
            return {
                ...state,
                
            };
        default: break;
    }
    return state;
};
export default mantra