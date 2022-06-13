import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const NewCard = () => {
  const [deck, setDeck] = useState(null)
  const [state, setState] = useState({
      name:"",
      genre:""
  })
  const [loading, setLoading] = useState(true)
  const {deckId} = useParams();  

  useEffect(async() => {
    const resp = await fetch(`http://localhost:9292/decks/${deckId}`)
    const data = await resp.json();
    setDeck(data);
    setLoading(false);
  }, [])

  if(loading){return <h1>Loading...</h1>}

  const handleChange = e => {
    setState({
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
      e.preventDefault();
  }
  
  return (
    <div>
        <h3>Create Card for {deck.name}</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={state.name} onChange={handleChange}/>
            </div>
            <br />
            <div>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" id="color" value={state.color} onChange={handleChange}/>
            </div>
            <br />
            <div>
            <label htmlFor="card_type">Card Type: </label>
            <input type="text" name="card_type" id="card_type" value={state.card_type} onChange={handleChange}/>
            </div>
            <br />
            <input type="submit" value="Create Card"/>
        </form>
    </div>
  )
}

export default NewCard