import {
  LIST_MOVIE_FAILED,
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  listMovie: null,
  err: null,
  carouselStatus: "now",
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_MOVIE_REQUEST:
      state.loading = true;
      state.listMovie = null;
      state.err = null;
      return { ...state };
    case LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.listMovie = action.payload;
      state.carouselStatus = action.filmType;
      state.err = null;
      return { ...state };
    case LIST_MOVIE_FAILED:
      state.loading = false;
      state.listMovie = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listMovieReducer;
