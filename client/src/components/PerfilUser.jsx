import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { login } from "../lib/Redux/actions";
import { withRouter } from "react-router-dom";
import { GetData } from "../lib/getData";
import { NuevaClase } from "./NuevaClase";



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
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleImgChange = e => {
    const { dispatch } = this.props;
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
              <React.Fragment>
                <div className="generalOther">
                  <div className="containerimgperfilOther">
                    <img
                      className="imgPerfilOther"
                      src={userProfe.imgPath}
                      alt="foto"
                    />
                  </div>
                  <div className="containerInformation">
                    <p className="nombreOther">{userProfe.username}</p>
                    <div className="containerDevs">
                      {userProfe.selectedOptionDeveloper.map((e, i) => (
                        <p key={i}>{e.value} &nbsp;</p>
                      ))}
                    </div>
                    <div className="containerSys">
                      {userProfe.selectedOptionSysAdmin.map((e, i) => (
                        <p key={i}>{e.value} &nbsp; </p>
                      ))}
                    </div>
                    <p className=""> Escribeme un correo a {userProfe.mail}</p>
                    <div>
                      <label className="unPoco">Un poco de mi...</label>
                      <div className="containerDescriptionOther field">
                        <p>{userProfe.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='porAbajo'>
                  <div className="getClase">
                    <h2>Pideme una clase &nbsp;</h2>
                    <label class="switch">
                      <input
                        type="checkbox"
                        onClick={() => this.handleClase()}
                      />
                      <span class="slider round" />
                    </label>
                  </div>
                  {nuevaClase ? (
                    <NuevaClase props={userProfe} userLogin={user} />
                  ) : null}
                </div>
              </React.Fragment>
            )}
          </div>
        ) : (
          <React.Fragment>
            <div className="generalOther">
              <div className="containerimgperfilOther">
                <img
                  className="imgPerfilOther"
                  src={userProfe.imgPath}
                  alt="foto"
                />
              </div>
              <div className="containerInformation">
                <p className="nombreOther">{userProfe.username}</p>
                <div className="containerDevs">
                  {userProfe.selectedOptionDeveloper.map((e, i) => (
                    <p key={i}>{e.value} &nbsp;</p>
                  ))}
                </div>
                <div className="containerSys">
                  {userProfe.selectedOptionSysAdmin.map((e, i) => (
                    <p key={i}>{e.value} &nbsp; </p>
                  ))}
                </div>
                <p className=""> Escribeme un correo a {userProfe.mail}</p>
                <div>
                  <label className="unPoco">Un poco de mi...</label>
                  <div className="containerDescriptionOther field">
                    <p>{userProfe.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="getClase">
                <h2>Pideme una clase &nbsp;</h2>
                <label class="switch">
                  <input type="checkbox" onClick={() => this.handleClase()} />
                  <span class="slider round" />
                </label>
              </div>
              {nuevaClase ? (
                <NuevaClase props={userProfe} userLogin={user} />
              ) : null}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export const PerfilUser = connect(store => store)(withRouter(_PerfilUser));
