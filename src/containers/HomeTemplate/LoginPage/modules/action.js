import { CHANGE_LAYOUT_FORM } from "./constant";
import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./constant";
import Axios from "axios";

export const actChangeLayoutForm = () => {
  return {
    type: CHANGE_LAYOUT_FORM,
  };
};
export const actLoginApi = (user, history) => {
  //username: dpnguyen password:123456
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("UserGuest", JSON.stringify(result.data));
          history.push("/");
        } else {
          alert("Vui lòng đăng nhập ở trang admin");
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

export const actLoginRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};
export const actLoginSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};
export const actLoginFailed = (err) => {
  return {
    type: AUTH_FAILED,
    payload: err,
  };
};
