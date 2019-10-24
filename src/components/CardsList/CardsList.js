import React from 'react';
import Card from './Card/Card';
import Footer from '../Footer/Footer';
import './style/cardslist.sass';

const cardsText = [
    {text: 'How will customers contact you?', status: 'complete'},
    {text: 'How will customers pay you?', status: 'complete'},
    {text: 'How will Klickly charge you?', status: 'incomplete'},
    {text:'How will Klickly contact you?', status: 'incomplete'},
];

const CardsList = () => {
    return (
        <section className="cards__list">
            {
                cardsText.map(card=>
                    <Card
                        text={card.text}
                        status={card.status}
                    />
                )

            }
            <Footer/>
        </section>
    )
} ;

export default CardsList;