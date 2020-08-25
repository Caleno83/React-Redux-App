import { FETCHING_ANIME_START, FETCHING_ANIME_SUCCESS, FETCHING_ANIME_ERROR } from "../Actions/actions";

const initialState = {
    isFetching: false,
    error: "",
    anime: [],
  };
  

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_ANIME_START:
        return state;
      case FETCHING_ANIME_SUCCESS:
        return state;
      case FETCHING_ANIME_ERROR:
        return state;
      default:
        return state;
    }
  };