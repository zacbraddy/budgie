import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../auth/actions';
import Header from '../header';
import Landing from '../landing';
import Budget from '../budget';

const Dashboard = () => <h2>Dashboard</h2>;
const BudgetNew = () => <h2>BudgetNew</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/budget" component={Budget} />
            <Route path="/budget/new" component={BudgetNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
