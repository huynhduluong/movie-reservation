import React from "react";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  return (
    <>
        <div className="maxHeightNavbarHome"></div>
        <div id="navbarHeader" className="bg-light text-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 nav-left">
                <img src="/img/logo.png" alt="logo" />
              </div>
              <div className="col-md-6 d-none d-md-flex nav-center justify-content-center">
                <ul>
                  <li>
                    <Link exact to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/list-movie">List Movie</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-flex nav-right">
                <Link to="/login" className="ml-auto">
                  <img src="/img/avatar.png" alt="avatar" />
                  <span>Đăng nhập</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
