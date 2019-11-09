import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../firebase-auth';
import * as authActions from '../auth/actions';

class Header extends Component {
  renderContent(firebase) {
    if (!firebase.userInfo)
      return (
        <li>
          <button onClick={() => this.props.actions.fetchUser(firebase)}>
            Login with Google
          </button>
        </li>
      );

    return (
      <li>
        <button onClick={() => this.props.actions.signOut(firebase)}>
          Logout
        </button>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/budget' : '/'} className="brand-logo">
            Budgie
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <FirebaseContext.Consumer>
              {this.renderContent.bind(this)}
            </FirebaseContext.Consumer>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: {
      ...bindActionCreators(authActions, dispatch),
    },
  })
)(Header);
