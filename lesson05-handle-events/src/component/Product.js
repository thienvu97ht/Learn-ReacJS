import React, { Component } from "react";

class Product extends Component {

  constructor(props) {
    super(props);
    this.onAddToCart1 = this.onAddToCart1.bind(this);
  }

  onAddToCart1() {
    console.log(this.props.name + ' - ' + this.props.price);
  }

  onAddToCart2 = () => {
    console.log(this.props.name + " - " + this.props.price);
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div href="/#" className="thumbnail">
          <img alt="" />
          <div className="caption">
            <img
              src={this.props.image}
              alt={this.props.name}
              className="img-product"
            />
            <h3>{this.props.name}</h3>
            <p>{this.props.price}</p>
            <p>
              <a
                href="/#"
                className="btn btn-primary"
                onClick={this.onAddToCart1}>
                Mua ngay
              </a>

              <a
                href="/#"
                className="btn btn-primary"
                onClick={this.onAddToCart2}>
                Mua ngay
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
