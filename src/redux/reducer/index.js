import { combineReducers } from "redux";
import loginUserReducer from "./../../containers/HomeTemplate/LoginPage/modules/reducer";

const rootReducer = combineReducers({ loginUserReducer });

export default rootReducer;
