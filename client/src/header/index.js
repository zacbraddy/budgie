import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';

const Header = () => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  const renderContent = () => {
    if (isLoaded(auth) && isEmpty(auth))
      return (
        <li>
          <button onClick={() => firebase.login({ provider: 'google' })}>
            Login with Google
          </button>
        </li>
      );

    return (
      <li>
        <button onClick={() => firebase.logout()}>Logout</button>
      </li>
    );
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={!isLoaded || !isEmpty(auth) ? '/budget' : '/'}
          className="brand-logo"
        >
          Budgie
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

export default connect()(Header);
