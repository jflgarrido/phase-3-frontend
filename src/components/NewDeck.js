import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const NewDeck = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleChange = e => {
    setName(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'applicaiton/json'
    }
    const body = { name: name}
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`http://localhost:9292/decks`, options)
    navigate.push("/decks");
  }
  return (
    <div>
      <h1>New Deck</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={handleChange}/>
        </div>
        <br />
        <input type="submit" value="Create Deck" />

      </form>
    </div>
  )
}

export default NewDeck