const { CHANGE_THEME_REQUEST } = require("./constant");

let initialState = {
  themeStatus: false,
};

const changeThemeReducer = (state = initialState, action) => {
  if (action.type === CHANGE_THEME_REQUEST) {
    state.themeStatus = action.payload;
    return { ...state };
  }
  return { ...state };
};

export default changeThemeReducer;
