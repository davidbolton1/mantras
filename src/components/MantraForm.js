import React, {Component} from 'react';

class MantraForm extends Component {
    constructor(props) {
        super(props);
        this.state= {text: 'A test'};
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
      }
    


    render() {

        return (
            <div>
            <form>
                <label>Mantra:
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                </label>
            </form>
            </div>
        )
    }

    

}

export default MantraForm