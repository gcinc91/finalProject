import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AuthAPI } from "../lib/auth";
import { login } from "../lib/Redux/actions";
import { withRouter } from "react-router-dom";
import { GetData } from "../lib/getData";
import { NuevaClase } from "./NuevaClase";
import styled from 'styled-components';


const Nombre = styled.p`
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Lobster");
body{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2.5rem;
}
`

class _PerfilUser extends React.Component {
  constructor() {
    super();
    this.state = {
      userProfe: "",
      nuevaClase: false
    };
  }

  handleClase() {
    const { nuevaClase } = this.state;
    const { user, history } = this.props;
    if (user) {
      this.setState({ nuevaClase: !nuevaClase });
    } else {
      this.setState({ nuevaClase: !nuevaClase });
      history.push("/login");
    }
  }

  handleImgChange = e => {
    const { dispatch } = this.props;
    console.log(this.props);
    const name = this.username;
    let file = new FormData();
    file.set("name", name);
    file.append("photo", e.target.files[0], name);
    AuthAPI.upload(file).then(({ data }) => {
      dispatch(login(data));
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    GetData.user(id).then(user => {
      this.setState({ userProfe: user });
    });
  }

  setRedirect() {
    const { history } = this.props;
    history.push("/miprofile");
  }

  render() {
    const { user } = this.props;
    const { nuevaClase } = this.state;

    const { data } = this.props.userProfe;
    const userProfe = data;

    return (
      <div>
        {user ? (
          <div>
            {user.username === userProfe.username ? (
              this.setRedirect()
            ) : (
              <div className="generalOther">
                <div className='containerimgperfilOther'>
                  <img
                    className="imgPerfilOther"
                    src={userProfe.imgPath}
                    alt="foto"
                  />
                  <p className='nombreOther'>{userProfe.username}</p>
                </div>
                <div className='containerDevs'>

                {userProfe.selectedOptionDeveloper.map((e, i) => (
                  <p key={i}>{e.value}  &nbsp;</p>
                  ))}
                  </div>
                  <div className='containerSys'>
                {userProfe.selectedOptionSysAdmin.map((e, i) => (
                  <p key={i}>{e.value} &nbsp; </p>
                  ))}
                  </div>
                <p className=""> Escribeme un correo a {userProfe.mail}</p>
                <label>Un poco de mi...</label>
                <div className='containerDescriptionOther'>
                <p >{userProfe.description}</p>
                </div>

                <div>
                  <h2>Pideme una clase</h2>
                  <label class="switch">
                    <input type="checkbox" onClick={() => this.handleClase()} />
                    <span class="slider round" />
                  </label>
                </div>
                {nuevaClase ? (
                  <NuevaClase props={userProfe} userLogin={user} />
                ) : null}
              </div>
            )}
          </div>
        ) : (
          <div>
            <img className="" src={userProfe.imgPath} alt="foto" />
            <p className="">{userProfe.username}</p>

            {userProfe.selectedOptionDeveloper.map((e, i) => (
              <p key={i}>{e.value}</p>
            ))}
            {userProfe.selectedOptionSysAdmin.map((e, i) => (
              <p key={i}>{e.value}</p>
            ))}
            <p className="">{userProfe.mail}</p>
            <p className="">{userProfe.description}</p>

            <div>
              <h2>Pideme una clase</h2>
              <label class="switch">
                <input type="checkbox" onClick={() => this.handleClase()} />
                <span class="slider round" />
              </label>
            </div>
            {nuevaClase ? (
              <NuevaClase props={userProfe} userLogin={user} />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export const PerfilUser = connect(store => store)(withRouter(_PerfilUser));
