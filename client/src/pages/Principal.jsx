import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { logout } from "../lib/Redux/actions";
import { Navbar } from "../components/Navbar";

export class _Principal extends React.Component {
  handleLogout() {
    const { dispatch } = this.props;
    AuthAPI.logout()
      .then(user => {
        dispatch(logout(user));
      })
      .catch(e => e);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        {user ? (
          <div>
            <p>Welcome {user.username}</p>
            <p>puntuation {user.puntuation}</p>
            <button onClick={() => this.handleLogout()}>LOGOUT</button>
          </div>
        ) : (
          <React.Fragment>
            <Navbar/>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export const Principal = connect(store => store)(_Principal);
