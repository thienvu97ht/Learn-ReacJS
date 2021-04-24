import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Apple Iphone 6 Plus",
          price: "15000000",
          image:
            "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-16gb-lock-my-like-new-didongviet-2.jpg",
          status: true,
        },
        {
          id: 2,
          name: "Samsung galaxy s7",
          price: "18000000",
          image:
            "https://sudospaces.com/mobilecity-vn/images/2019/12/galaxy-s7-gold.jpg",
          status: true,
        },
        {
          id: 3,
          name: "Nokia 6",
          price: "8000000",
          image:
            "https://didongviet.vn/pub/media/catalog/product//n/o/nokia-6-den-didongviet_2.jpg",
          status: true,
        },
      ],

      isActive: true,
    };
  }

  onSetState = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    let elements = this.state.products.map((product) => {
      let result = "";
      if (product.status) {
        result = (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <span className="label label-success">{product.price} VNĐ</span>
            </td>
          </tr>
        );
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="/#">
            State
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>{elements}</tbody>
            </table>
            <button type="button" className="btn btn-warning" onClick={ this.onSetState }>
              Active : { this.state.isActive === true ? 'true' : 'false' }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
