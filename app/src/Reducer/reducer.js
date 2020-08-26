import { FETCHING_ANIME_START, FETCHING_ANIME_SUCCESS, FETCHING_ANIME_ERROR } from "../Actions/actions";

const initialState = {
    isFetching: false,
    error: "",
    anime: []
  };
  

  export const reducer = (state = initialState, action) => {
      console.log("reducer", action);
    switch (action.type) {
      case FETCHING_ANIME_START:
        return {
            ...state, isFetching: true, error: ""
        };
      case FETCHING_ANIME_SUCCESS:
        return {
            ...state, anime: action.payload, isFetching: false, error: ""
        };
      case FETCHING_ANIME_ERROR:
        return {
            ...state, isFetching: false, error: action.payload
        };
      default:
        return state;
    }
  };