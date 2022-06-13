import React, {useEffect, useState} from 'react'
import DeckTicket from './DeckTicket';

const Decks = () => {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/decks`)
    .then(resp =>resp.json())
    .then(data => {
      setDecks(data)
    })
  }, [])

  const deckTickets = decks.map((deck, index) => <DeckTicket key={index} deck={deck}/>)

  return (
    <div>
        <h1>Decks</h1>
        {deckTickets}
    </div>
  )
}

export default Decks