import {
  LIST_CINEMA_FAILED,
  LIST_CINEMA_SUCCESS,
  LIST_CINEMA_REQUEST,
} from "./constant";

let initialState = {
  loading: false,
  listCinema: null,
  err: null,
};

const listCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CINEMA_REQUEST:
      state.loading = true;
      state.listCinema = null;
      state.err = null;
      return { ...state };
    case LIST_CINEMA_SUCCESS:
      state.loading = false;
      state.listCinema = action.payload;
      state.err = null;
      return { ...state };
    case LIST_CINEMA_FAILED:
      state.loading = false;
      state.listCinema = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listCinemaReducer;
