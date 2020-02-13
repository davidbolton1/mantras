import React, {Component} from 'react';

class MantraForm extends React {
    constructor(props) {
        super(props);
        this.state= {text: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    


    render() {

        return (
            <div>
            <form>
                <label>Mantra:
                    <input type="text" value={this.state.text}/>
                </label>
            </form>
            </div>
        )
    }

    

}

export default MantraForm