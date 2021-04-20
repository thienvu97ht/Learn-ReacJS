import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div href="/#" className="thumbnail">
            <img alt="" />
            <div className="caption">
            <img src={ this.props.image } alt={ this.props.name } className="img-product"/>
              <h3>{ this.props.name }</h3>
              <p>{ this.props.price }</p>
              <p>
                <a href="/#" className="btn btn-primary">
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
