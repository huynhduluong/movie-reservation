import Axios from "axios";
import {
  USER_GUEST_FAILED,
  USER_GUEST_REQUEST,
  USER_GUEST_SUCCESS,
} from "./constant";

export const actUserGuestApi = () => {
  let accessToken = JSON.parse(localStorage.getItem("UserGuest")).accessToken;
  let user = {
    taiKhoan: JSON.parse(localStorage.getItem("UserGuest")).taiKhoan,
  };
  return (dispatch) => {
    dispatch(actUserGuestRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: user,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        dispatch(actUserGuestSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUserGuestFailed(err));
      });
  };
};

export const actChangeInfoApi = (user) => {
  let accessToken = JSON.parse(localStorage.getItem("UserGuest")).accessToken;
  return (dispatch) => {
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", //không có https nên báo lỗi
      data: user,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        alert("Thay đổi thông tin thành công");
        dispatch(actUserGuestSuccess(result.data));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const actUserGuestRequest = () => {
  return {
    type: USER_GUEST_REQUEST,
  };
};

export const actUserGuestSuccess = (data) => {
  return {
    type: USER_GUEST_SUCCESS,
    payload: data,
  };
};

export const actUserGuestFailed = (err) => {
  return {
    type: USER_GUEST_FAILED,
    payload: err,
  };
};
