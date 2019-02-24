import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { logout } from "../lib/Redux/actions";
import { Navbar } from "../components/Navbar";
import { PerfilUser } from "../components/PerfilUser";
import { AllUsers } from "../components/AllUsers";

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
    console.log(user);

    return (
      <div>
        {user ? (
          <div>
            <Navbar />
            <PerfilUser
              username={user.username}
              selectedOptionDeveloper={user.selectedOptionDeveloper}
              selectedOptionSysAdmin={user.selectedOptionSysAdmin}
              imgPath={user.imgPath}
              mail={user.mail}
              description={user.description}
            />

            <button onClick={() => this.handleLogout()}>LOGOUT</button>
          </div>
        ) : (
          <React.Fragment>
            <Navbar />
            <AllUsers/>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export const Principal = connect(store => store)(_Principal);
