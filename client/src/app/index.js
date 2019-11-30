import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import Header from '../header';
import Landing from '../landing';
import Budget from '../budget';
import AuthenticatedRoute from './authenticated-route';

const App = () => {
  const firebase = useFirebase();
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <AuthenticatedRoute exact path="/budget">
            <Budget />
          </AuthenticatedRoute>
        </div>
      </BrowserRouter>
    </>
  );
};

export default connect()(App);
