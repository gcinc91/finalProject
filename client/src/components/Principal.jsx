import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { logout } from "../lib/Redux/actions";
import { NavLink } from "react-router-dom";



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
            <button onClick={() => this.handleLogout()}>LOGOUT</button>
          </div>
        ) : (
          <React.Fragment>
            <NavLink to="/login" className='button is-link' style={{ textDecoration: "none" }}>Login</NavLink>
            <NavLink to="/signup" className="button is-success" style={{ textDecoration: "none" }} >Signup</NavLink>
          </React.Fragment>
        )}

        </div>
    );
  }
}

export const Principal = connect(store => store)(_Principal);
