import Axios from "axios";
import {
  LIST_CINEMA_FAILED,
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
} from "./constant";

export const actListCinemaApi = () => {
  return (dispatch) => {
    actListCinemaRequest();
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListCinemaSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListCinemaFailed(err));
      });
  };
};

export const actListCinemaRequest = () => {
  return {
    type: LIST_CINEMA_REQUEST,
  };
};

export const actListCinemaSuccess = (data) => {
  return {
    type: LIST_CINEMA_SUCCESS,
    payload: data,
  };
};
export const actListCinemaFailed = (err) => {
  return {
    type: LIST_CINEMA_FAILED,
    payload: err,
  };
};
