import React, { Component } from "react";
import "./App.css";
import Product from "./component/Product";

class App extends Component {
  onClick() {
    console.log("Đây là app component 1");
  }

  onClick2 = (text) => {
    console.log(text);
  };

  render() {
    var products = [
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
    ];

    let elements = products.map((product) => {
      let result = "";
      if (product.status) {
        result = (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        );
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="/#">
            Props
          </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onClick}>
                Click Me 1 !
              </button>

              <button
                type="button"
                className="btn btn-warning"
                onClick={() => this.onClick2("Hello World")}>
                Click Me 2 !
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
