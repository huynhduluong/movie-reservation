import { combineReducers } from "redux";
import loginUserReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";
import changeThemeReducer from "./../../components/NavbarHome/modules/reducer";

const rootReducer = combineReducers({ loginUserReducer, changeThemeReducer });

export default rootReducer;
