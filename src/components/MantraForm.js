import React, {Component} from 'react';

class MantraForm extends Component {
    constructor(props) {
        super(props);
        this.state= {text: 'Enter new mantra'};
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
      }
    
      handleSubmit = (event) => {
          event.preventDefault();
        this.props.handleSubmit(this.state.text);
        this.setState({
            text: ''
        })
      }


    render() {

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Mantra:
                    <input type="text" value={this.state.text} onChange={this.handleChange}/>
                    <input type="submit" value="Go!" />
                </label>
            </form>
            </div>
        )
    }

    

}

export default MantraForm