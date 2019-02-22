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
    console.log(user)

    return (
      <div>
        {user ? (
          <div>
            <Navbar/>
            <p>Welcome {user.username}</p>
            <p>puntuation {user.puntuation}</p>
            {user.selectedOptionDeveloper.map(
              (e,i) => (<p key={i}>Array de Developer {e.value}</p>)
            )}
            {user.selectedOptionSysAdmin.map(
              (e,i) => (<p key={i}>Array de Developer {e.value}</p>)
            )}
            
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
