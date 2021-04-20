import React, { Component } from "react";
import "./App.css";

class App extends Component {
  showInfoProduct(product) {
    if (product.status) {
      return (
        <h3>
          ID: {product.id} <br />
          Name: {product.name} <br />
          Price: {product.price} VNĐ
          <br />
          status : {product.status ? "Active" : "Pending"} <br />
        </h3>
      );
    }
  }

  render() {
    var a = 5;
    var b = 7;
    var product = {
      id: 1,
      name: "Iphone 12 pro max",
      price: 32000000,
      status: true,
    };

    var users = [
      {
        id: 1,
        name: "Nguyễn Văn A",
        age: 18,
      },
      {
        id: 2,
        name: "Nguyễn Văn C",
        age: 15,
      },
      {
        id: 3,
        name: "Nguyễn Văn D",
        age: 19,
      },
    ];

    var elements = users.map((user, index) => {
      return (
        <div key={ user.id }>
          <h2>{ user.name }</h2>
          <p>{ user.age }</p>
        </div>
      );
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="/#">
            Title
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Link</a>
            </li>
          </ul>
        </nav>
        <div className="ml-30">
          <h2>
            a : {a} <br />b : {b} <br />a + b : {a + b} <br />
          </h2>
          {this.showInfoProduct(product)}
          <br/>
          { elements }
        </div>
      </div>
    );
  }
}
export default App;
