import {
    connect
} from 'react-redux';
import {actionAddMantra} from '../actions'
import MantraForm from '../components/MantraForm';

// Don't need mapStateToProps since we aren't displaying anything
// We are taking info and changing state
// function mapStateToProps(state) {
//     return {
//         text: state.text
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newMantra) => {
            dispatch(actionAddMantra(newMantra))
        }
    }
}

/*
alternate way to write it
const mapDispatchToProps = dispatch => ({
    handleSubmit: (newMantra) => dispatch(actionAddMantra(newMantra))
})
*/
const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(MantraForm)
