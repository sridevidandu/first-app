import React from 'react';
import { Button, Form } from 'react-bootstrap';

class CreateCard extends React.Component {
    state = {
        input: ""
    }

    handleInput = (event) => {
        event.persist() //need explaination on this
        this.setState( {
            input: event.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit = {this.handleNewCard} className="new-card-form">
                <h4> Create Card</h4>
                <input onChange = {this.handleInput} className="new-card-input" type="text" value={this.state.input}/>
                <input className = "new-card-input" type="submit" value="Create" />
            </form>
        )
    }
}

export default CreateCard;