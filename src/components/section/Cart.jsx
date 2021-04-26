import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./../context";
import "../css/Details.css";
import "../css/Cart.css";
import Color from "./Color";

export default class Cart extends Component {
  static contextType = DataContext;
  componentDidMount() {
    this.context.getTotal();
  }
  render() {
    const { cart, reduction, increase, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>
                <Color colors={item.colors} />
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    -
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    +
                  </button>
                </div>
              </div>

              <div className="delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="payment">Payment</Link>
            <h3>Total : ${total}</h3>
          </div>
        </>
      );
    }
  }
}
