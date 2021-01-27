import {
  USER_GUEST_FAILED,
  USER_GUEST_REQUEST,
  USER_GUEST_SUCCESS,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userGuestReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_GUEST_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case USER_GUEST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case USER_GUEST_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default userGuestReducer;
