import React from 'react'
import {NavLink} from 'react-router-dom'

const CardTicket = ( {card}) => {
  return (
    <li>
        <NavLink to={`/cards/${card.id}`}>{card.name}</NavLink>
    </li>
  )
}

export default CardTicket