import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import styled from 'styled-components';

const SpinnerIcon = styled.i`
  font-size: 28px;
`;

const SpinnerContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 35%;
  z-index: 100;
  background: transparent;
`;

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerIcon className="fas fa-spinner-third fa-spin" />
  </SpinnerContainer>
);

export default ({ children, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth);
  const firebaseIsInitializing = useSelector(
    state => state.firebase.isInitializing
  );
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isLoaded(auth))
          return (
            <div style={{ textAlign: 'center' }}>
              <Spinner />
            </div>
          );

        return !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
