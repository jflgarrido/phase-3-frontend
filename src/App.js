import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Decks from './components/Decks';
import Home from './components/Home';
import NewCard from './components/NewCard';
import NewDeck from './components/NewDeck';
import DeckDetails from './components/DeckDetails';
import CardDetails from './components/CardDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/decks" element={<Decks />} />
            <Route exact path="/cards" element={<Cards />} />
            <Route exact path="/decks/new" element={<NewDeck />} />
            <Route exact path="/decks/:deckId/cards/new" element={<NewCard />} />
            <Route exact path="/decks/:id" element={<DeckDetails />} />
            <Route exact path="/cards/:id" element={<CardDetails />} />
            <Route element={PageNotFound} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
