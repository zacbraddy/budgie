import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from './actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Budgie"
        description="One month subscription, £4.99"
        amount={499}
        currency="GBP"
        locale="auto"
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
