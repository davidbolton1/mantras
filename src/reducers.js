import {ADD_MANTRA} from './actions'


const initialState = {
    mantrasArr: []
}


export const mantras = (state = initialState, action) => {
    //const newState = [...state]
    switch (action.type) {
        case ADD_MANTRA:
            return {
               mantrasArr: state.mantrasArr.concat(action.payload.mantra)
                
            };
        default: break;
    }
    return state;
};
