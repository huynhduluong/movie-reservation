import { combineReducers } from "redux";
import userGuestReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";
import changeThemeReducer from "./../../components/NavbarHome/modules/reducer";
import listMovieReducer from "./../../containers/HomeTemplate/HomePage/modules/ListMovie/reducer";
import listShowTimeReducer from "./../../containers/HomeTemplate/HomePage/modules/ListShowTime/reducer";
import detailPageReducer from "./../../containers/HomeTemplate/DetailFilmPage/modules/reducer";
import dialogReducer from "./../../components/DialogMovie/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";

const rootReducer = combineReducers({
  changeThemeReducer,
  listMovieReducer,
  listShowTimeReducer,
  detailPageReducer,
  dialogReducer,
  authReducer,
  userGuestReducer,
});

export default rootReducer;
