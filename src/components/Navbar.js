import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/decks">Decks</NavLink></li>
            <li><NavLink to="/cards">Cards</NavLink></li>
            <li><NavLink to="/decks/new">Create Deck</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar