import React from 'react';
import CreateCard from '../components/CreateCard';
import ToDoCardContainer from './ToDoCardContainer';

class MainContainer extends React.Component {
    state = {
        cards: []
    }

    createNewCard = (input) => {
        localStorage.setItem('cards', JSON.stringify([...this.state.cards, input]));
        this.setState({
            cards: [...this.state.cards, input]
        })
    }

    componentDidMount() {
        let cards = localStorage.getItem("cards");
        if (cards) {
            cards = JSON.parse(cards);
            this.setState({
                cards: cards
            })
        }
    }

    render() {
        return (
            <div className='main-container'>
                <ToDoCardContainer cards={this.state.cards}/>
                <CreateCard createNewCard={this.createNewCard} />
            </div>
        )
    }
}

export default MainContainer;