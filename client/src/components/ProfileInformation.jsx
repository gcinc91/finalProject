import React from 'react';
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import { login } from '../lib/Redux/actions';
import { logout } from '../lib/Redux/actions';

class _PerfilInformation extends React.Component{

  handleImgChange = e => {
    const { dispatch } = this.props;
    const name = this.username;
    let file = new FormData();
    file.set("name", name);
    file.append("photo", e.target.files[0], name);
    AuthAPI.upload(file).then(({ data }) => {
      dispatch(login(data))
    });
  };

  handleLogout() {
    const { dispatch } = this.props;
    AuthAPI.logout()
      .then(user => {
        dispatch(logout(user));
      })
      .catch(e => e);
  }



  render(){
    const {user} = this.props
    return(
      <div className="generalOther darMargen">
              <div className="containerimgperfilOther">
                <img src={user.imgPath} alt="foto" width="400" />
                <input
                  type="file"
                  onChange={e => this.handleImgChange(e)}
                  name="name"
                  className="button is-info is-inverted"
                />
              </div>
              <div className="containerInformation darMargen">
                <p className="nombreOther">{user.username}</p>
                <div className="containerDevs">
                  {user.selectedOptionDeveloper.map((e, i) => (
                    <p key={i}>{e.value} &nbsp;</p>
                  ))}
                </div>
                <div className="containerSys">
                  {user.selectedOptionSysAdmin.map((e, i) => (
                    <p key={i}>{e.value} &nbsp;</p>
                  ))}
                </div>
                <p className="">Mi correo: {user.mail}</p>
                <div className="darMargen2">
                  <label className="unPoco">Mi descripcion</label>
                  <p className="">{user.description}</p>
                </div>
                <button
                  className="button is-medium is-danger"
                  onClick={() => this.handleLogout()}
                >
                  LOGOUT
                </button>
              </div>
            </div>
    )

  }
}

export const PerfilInformation = connect(store => store)(_PerfilInformation)
