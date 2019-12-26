import React from 'react';
import ToDoCard from '../components/ToDoCard';

function ToDoCardContainer(props) {

    const element = props.cards.map(card => {
        return <ToDoCard cards={card} />
    })
    
    return (
        <div>
            {element}
        </div>
    )
}

export default ToDoCardContainer;