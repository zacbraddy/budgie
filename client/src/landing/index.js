import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Landing = () => {
  const firebase = useFirebase();
  const history = useHistory();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Budgie!</h1>
      Straighten up ya' finances, Straighten up ya' finances! R'AWRK
      <StyledFirebaseAuth
        uiConfig={{
          signInFlow: 'redirect',
          signInSuccessUrl: '/budget',
          signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
          /*callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
              firebase.handleRedirectResult(authResult).then(() => {
                console.log('zac', { authResult, redirectUrl });
                history.push(redirectUrl);
              });
              return false;
            },
          },*/
        }}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default Landing;
