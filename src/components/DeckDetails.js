import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import CardTicket from './CardTicket';

const DeckDetails = () => {
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(async() => {
    const resp = await fetch(`http:localhost:9292/decks/${id}`)
    const data = await resp.json();
    setDeck(data);
    setLoading(false);
  }, [])
  if (loading) {
    return <h1>Loading...</h1>

  } else {
    const cardTickets = deck.card.map((card, index) => <CardTicket key={index} card= {card}/>)
    return (
      <div>
          <h1>{ deck.name }</h1>
          <p><NavLink to={`/decks/${deck.id}/cards/new`}>Create Card</NavLink></p>
          {cardTickets}
      </div>
    )
  }
  
}

export default DeckDetails