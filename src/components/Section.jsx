import React, { Component } from "react";
import { Route } from "react-router-dom";
import Details from "./section/Details";
import Products from "./section/Products";
import Cart from "./section/Cart";
import Payment from "./section/Payment";

export default class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
      </section>
    );
  }
}
