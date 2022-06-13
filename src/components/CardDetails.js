import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const CardDetails = () => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(async() => {
    const resp = await fetch(`http:localhost:9292/cards/${id}`)
    const data = await resp.json();
    setCard(data);
    setLoading(false);
  }, [])
  if (loading) {
    return <h1>Loading...</h1>

  } else {
    return (
      <div>
          <h1>{ card.name }</h1>
          <p>Color: {card.color}</p>
          <p>Card Type: {card.card_type}</p>
      </div>
    )
  }
  
}

export default CardDetails