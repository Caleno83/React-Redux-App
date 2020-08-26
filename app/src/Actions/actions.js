import axios from "axios";

export const FETCHING_ANIME_START = "FETCHING_ANIME_START";
export const FETCHING_ANIME_SUCCESS = "FETCHING_ANIME_SUCCESS";
export const FETCHING_ANIME_ERROR = "FETCHING_ANIME_ERROR";



export const getAnime = () => (dispatch) => {
    console.log("anime action");
    dispatch({ type: FETCHING_ANIME_START });
    axios
      .get(`https://api.pokemontcg.io/v1/cards`)
      .then((res) => {
        dispatch({ type: FETCHING_ANIME_SUCCESS, payload: res.data.cards });
        console.log("The Response: ", res);
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_ANIME_ERROR,
          payload:` ${err.response.status} ${err.response.data}`
        });
        console.log(err);
      });
  };


