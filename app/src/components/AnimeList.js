import React from "react";
import { connect } from "react-redux";
import { getAnime } from "../Actions/actions";

const AnimeCard = (props) => {
  const fetchAnime = (e) => {
    e.preventDefault();
    props.getAnime();
  };
  return (
    <>
      {props.isFetching ? (
        <h3>Hold tight, we're fetching your anime data...</h3>
      ) : (
        props.anime.map((pokemon) => (
          <div key={pokemon.id} className="pokemon">
            <div className="row">
              <div>
                <img src={pokemon.imageUrl} alt="Pokemon" />
              </div>
              <div>
                <h3>{pokemon.name}</h3>
                <p>Rarity: {pokemon.rarity}</p>
                <p>Type: {pokemon.supertype}</p>
              </div>
            </div>
          </div>
        ))
      )}
      {props.error !== "" ? <h4 className="error">{props.error}</h4> : null}
      <button onClick={fetchAnime}>Fetch Favorite Anime List</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    anime: state.anime,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = { getAnime };

export default connect(mapStateToProps, mapDispatchToProps)(AnimeCard);
