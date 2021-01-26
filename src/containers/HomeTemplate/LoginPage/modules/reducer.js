import {
  AUTH_FAILED,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  CHANGE_LAYOUT_FORM,
} from "./constant";

const initialState = {
  loginFormStatus: true, //true đã có tài khoản --> form sign in
  loading: false,
  data: null,
  err: null,
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT_FORM:
      let { loginFormStatus } = state;
      state.loginFormStatus = !loginFormStatus;
      return { ...state };
    case AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case AUTH_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case AUTH_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default loginUserReducer;
