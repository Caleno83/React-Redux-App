import React from "react";
import "./App.css";
import AnimeList from "./components/AnimeList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Favorite Animes is:</h1>
        <h2>Pokemon</h2>
        <AnimeList />
      </header>
    </div>
  );
}

export default App;
