import React from "react";
import { connect } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { GetData } from "../lib/getData";
import { MisClases } from "../components/MisClases";
import { PerfilInformation } from "../components/ProfileInformation";

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

 
  viewClases() {
    const { verClaseTeacher } = this.state;
    const { user } = this.props;
    GetData.impartirClases(user._id).then(clases => {
      this.setState({ clasesArr: clases });
      this.setState({ verClaseTeacher: !verClaseTeacher });
    });
  }
  viewLearnings() {
    const { verClasePendiente } = this.state;
    const { user } = this.props;
    GetData.tengoAprender(user._id).then(clase => {
      this.setState({ learninsgArr: clase });
      this.setState({ verClasePendiente: !verClasePendiente });
    });
  }

  render() {
    const { user } = this.props;
    const { verClasePendiente, verClaseTeacher } = this.state;

    return (
      <div>
        <Navbar />
        {user ? (
          <React.Fragment>
            <PerfilInformation/>
            
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
