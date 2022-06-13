import React, {useEffect, useState} from 'react'
import CardTicket from './CardTicket';

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/cards`)
    .then(resp =>resp.json())
    .then(data => {
      setCards(data)
    })
    
  }, [])

  const cardTickets = cards.map((card, index) => <CardTicket key={index} card={card}/>)

  return (
    <div>
        <h1>Cards</h1>
        {cardTickets}
    </div>
  )
}

export default Cards