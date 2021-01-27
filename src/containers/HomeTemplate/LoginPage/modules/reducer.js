import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CHANGE_LAYOUT_FORM,
} from "./constant";

const initialState = {
  loginFormStatus: true, //true đã có tài khoản --> form sign in
  loading: false,
  data: null,
  err: null,
  dialogStatus: false,
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT_FORM:
      let { loginFormStatus } = state;
      state.loginFormStatus = !loginFormStatus;
      return { ...state };
    case LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case LOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case LOGIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default loginUserReducer;
