import { combineReducers } from "redux";
import loginUserReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";
import changeThemeReducer from "./../../components/NavbarHome/modules/reducer";
import listMovieReducer from "./../../containers/HomeTemplate/HomePage/modules/ListMovie/reducer";
import listShowTimeReducer from "./../../containers/HomeTemplate/HomePage/modules/ListShowTime/reducer";

const rootReducer = combineReducers({
  loginUserReducer,
  changeThemeReducer,
  listMovieReducer,
  listShowTimeReducer,
});

export default rootReducer;
