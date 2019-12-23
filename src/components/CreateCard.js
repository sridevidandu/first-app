import React from 'react';
import { Button, Form } from 'react-bootstrap';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardName: "",
            toDoList: []
        };
    }
    handleChange(event) {
        this.setState({
            cardName: event.target.value
        },
            () => {
                console.log(this.state.cardName);
            });
    };
    handleClick(event) {
        this.setState({
            toDoList: [
                ...this.state.toDoList,
                this.state.cardName
            ],
            cardName : ""
        })
        console.log(this.state.toDoList);
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Control type="text" name="cardName" placeholder="First name" value={this.state.cardName} onChange={e => this.handleChange(e)} />
                    <Button variant="outline-primary" onClick={e => this.handleClick(e)}> Submit</Button>
                </Form>

            </div>
        )
    }
}
export default CreateCard;