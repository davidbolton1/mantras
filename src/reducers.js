import {ADD_MANTRA} from './actions'

const initalState = {
    mantras: []
}

const mantra = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANTRA:
            return {
                ...state,
                some logic here
            };
        default: break;
    }
    return state;
};
export default mantra