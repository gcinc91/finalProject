import React from "react";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";
import { login } from "../lib/Redux/actions";
import { logout } from "../lib/Redux/actions";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { GetData } from "../lib/getData";
import { MisClases } from "../components/MisClases";

class _MiProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      verClaseTeacher: false,
      verClasePendiente: false,
      clasesArr: [],
      learninsgArr: [],
      array: []
    };
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

  handleLogout() {
    const { dispatch } = this.props;
    AuthAPI.logout()
      .then(user => {
        dispatch(logout(user));
      })
      .catch(e => e);
  }

  viewClases() {
    const { verClaseTeacher } = this.state;
    const { user } = this.props;
    GetData.impartirClases(user._id).then(clases => {
      this.setState({ clasesArr: clases });
      this.setState({ verClaseTeacher: !verClaseTeacher });
    });
  }
  viewLearnings() {
    const { verClasePendiente, learninsgArr } = this.state;
    const { user } = this.props;
    user.clasesPendientes.map(id =>
      GetData.tengoAprender(id).then(clase => {
        this.setState({ learninsgArr });
        this.setState({ verClasePendiente: !verClasePendiente });
      })
    );
    console.log(this.state.array);
  }

  render() {
    const { user } = this.props;
    const { verClasePendiente, verClaseTeacher } = this.state;

    return (
      <div>
        <Navbar />
        {user ? (
          <React.Fragment>
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
            <div className="verClases">
              <div className="containerClases">
                <h1>Clases a impartir</h1>
                <label className="switch">
                  <input type="checkbox" onClick={() => this.viewClases()} />
                  <span className="slider round" />
                </label>

                {verClaseTeacher ? (
                  <MisClases clases={this.state.clasesArr} />
                ) : null}
              </div>
              <div className="containerClases">
                <h1>Tengo que aprender</h1>
                <label className="switch">
                  <input type="checkbox" onClick={() => this.viewLearnings()} />
                  <span className="slider round" />
                </label>

                {verClasePendiente ? (
                  <MisClases clases={this.state.learninsgArr} />
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="boxLogin">
            <p> Tienes que estar logado para poder ver tu perfil </p>
            <Link to="/login">
              <button className="button is-link is-medium ">Login</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export const MiProfile = connect(store => store)(_MiProfile);
