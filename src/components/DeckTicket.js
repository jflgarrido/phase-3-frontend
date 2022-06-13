import React from 'react'
import {NavLink} from 'react-router-dom'

const DeckTicket = ( {deck}) => {
  return (
    <li>
        <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink>
    </li>
  )
}

export default DeckTicket