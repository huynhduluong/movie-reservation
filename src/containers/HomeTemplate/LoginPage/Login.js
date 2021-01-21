import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangeLayoutForm } from "./modules/action";

class LoginForm extends Component {
  render() {
    return (
      <>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Đăng nhập</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Tài Khoản" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Mật Khẩu" />
              </div>
              <button type="submit" className="btn solid">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Bạn là người mới ?</h3>
              <p>
                Nếu bạn là người mới thì hãy chọn nút đăng ký để có những trải
                nghiệm tuyệt vời nhất
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  this.props.handleChangeStatus();
                }}
              >
                Đăng ký
              </button>
            </div>
            <img src="/img/log.svg" className="image" alt="login" />
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

export default connect(null, mapDispatchToProps)(LoginForm);
