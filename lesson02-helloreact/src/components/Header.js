import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="/#">Bài 2 : Component</a>
          <ul className="nav navbar-nav">
              <li>
                  <a href="/#">Trang Chủ</a>
              </li>
              <li className="active">
                  <a href="/#">Danh Mục Sản Phẩm</a>
              </li>
          </ul>
      </nav>
    );
  }
}

export default Header;
