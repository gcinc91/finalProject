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
      learninsgArr: []
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
    const { verClaseTeacher, clasesArr } = this.state;
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
      GetData.tengoAprender(id).then(clases => {
        learninsgArr.push(clases)
        this.setState({ learninsgArr});
      })
    );
    this.setState({ verClasePendiente: !verClasePendiente });
  }

  render() {
    const { user } = this.props;
    const { verClasePendiente, verClaseTeacher} = this.state;
    //console.log(this.state.learninsgArr)

    return (
      <div>
        <Navbar />
        {user ? (
          <div>
            <div className="boxesPerfil">
              <section className="imageProfile">
                <img src={user.imgPath} alt="foto" width="400" />
                <input
                  type="file"
                  onChange={e => this.handleImgChange(e)}
                  name="name"
                  className="button is-info is-inverted"
                />
              </section>

              <section className="seccionDatos imageProfile ">
                <p className="">{user.username}</p>

                {user.selectedOptionDeveloper.map((e, i) => (
                  <p key={i}>{e.value}</p>
                ))}
                {user.selectedOptionSysAdmin.map((e, i) => (
                  <p key={i}>{e.value}</p>
                ))}
                <p className="">{user.mail}</p>
                <p className="">{user.description}</p>
                <button onClick={() => this.handleLogout()}>LOGOUT</button>
              </section>
            </div>

            <div className="containerClases">
              <h1>Clases a impartir</h1>
              <label class="switch">
                <input type="checkbox" onClick={() => this.viewClases()} />
                <span class="slider round" />
              </label>

              {verClaseTeacher ? <MisClases clases={this.state.clasesArr} /> : null}
            </div>
            <div className="containerClases">
              <h1>Tengo que aprender</h1>
              <label class="switch">
                <input type="checkbox" onClick={() => this.viewLearnings()} />
                <span class="slider round" />
              </label>

              {verClasePendiente ? <MisClases clases={this.state.learninsgArr} /> : null}
            </div>
          </div>
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
