import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../auth/actions';
import Header from '../header';
import Landing from '../landing';

const Dashboard = () => <h2>Dashboard</h2>;
const BudgetNew = () => <h2>BudgetNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/budget" component={Dashboard} />
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
