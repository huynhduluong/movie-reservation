import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm } from "./modules/action";

class SignUpForm extends Component {
  render() {
    return (
      <>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-up-form">
              <h2 className="title">Đăng Ký</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Tài Khoản" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Mật Khẩu" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="text" placeholder="Họ Tên" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="text" placeholder="Số Điện Thoại" />
              </div>
              <button type="submit" className="btn ">
                Xác nhận
              </button>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel right-panel">
            <div className="content">
              <h3>Đã là thành viên ?</h3>
              <p>
                Nếu bạn đã là thành viên của Square thì hãy chọn vào nút đăng
                nhập để có những trải nghiệm tuyệt vời nhé
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => {
                  this.props.handleChangeStatus();
                }}
              >
                Đăng nhập
              </button>
            </div>
            <img src="/img/register.svg" className="image" alt="signup" />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeStatus: () => {
      dispatch(actChangeLayoutForm());
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUpForm);
