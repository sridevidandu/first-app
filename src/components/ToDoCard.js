import React from 'react';

class ToDoCard extends React.Component {
    render () {
    return(
        <div className = "to-do-card">
            <h4> {this.props.cards}</h4>
        </div>
        )
    }
}


export default ToDoCard;