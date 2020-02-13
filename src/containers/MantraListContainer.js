import {
    connect
} from 'react-redux';
//import {actionAddMantra} from '../actions'
import MantraList from '../components/MantraList';


function mapStateToProps(state) {
    return {
        mantras: state.mantrasArr
    }
}

/*
Dispatch only needed if there is user interactivity
function mapDispatchToProps(dispatch) {
    return {
        addNewMantra: () => {
            dispatch(actionAddMantra())
        }
    }
}
*/

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(MantraList)
