import { combineReducers } from "redux";
import loginUserReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";
import changeThemeReducer from "./../../components/NavbarHome/modules/reducer";
import listMovieReducer from "./../../containers/HomeTemplate/HomePage/modules/ListMovie/reducer";
import listCinemaReducer from "./../../containers/HomeTemplate/HomePage/modules/ListCinema/reducer";

const rootReducer = combineReducers({
  loginUserReducer,
  changeThemeReducer,
  listMovieReducer,
  listCinemaReducer,
});

export default rootReducer;
