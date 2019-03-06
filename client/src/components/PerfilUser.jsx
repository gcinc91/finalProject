import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AuthAPI } from "../lib/auth";
import { login } from "../lib/Redux/actions";
import { withRouter } from "react-router-dom";
import { GetData } from "../lib/getData";

class _PerfilUser extends React.Component {
  constructor() {
    super();
    this.state = {
      userProfe: ""
    };
  }

  thishandleClase(e) {}

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

  render() {
    const { user } = this.props;

    const { data } = this.props.userProfe;
    const userProfe = data;

    // console.log(userProfe.username)
    // console.log(user.username)

    return (
      <div>
        {user ? (
          <div>
            {user.username === userProfe.username ? (
              <div>
                <img className="" src={user.imgPath} alt="foto" />
                <input
                  type="file"
                  onChange={e => this.handleImgChange(e)}
                  name="name"
                />
                <p className="">{user.username}</p>

                {user.selectedOptionDeveloper.map((e, i) => (
                  <p key={i}>{e.value}</p>
                ))}
                {user.selectedOptionSysAdmin.map((e, i) => (
                  <p key={i}>{e.value}</p>
                ))}
                <p className="">{user.mail}</p>
                <p className="">{user.description}</p>

                {/* <button onClick={() => thishandleClase()}> Quiero una Clase</button> */}
              </div>
            ) : (
              <div>
                <img className="" src={userProfe.imgPath} alt="foto" />
                <input
                  type="file"
                  onChange={e => this.handleImgChange(e)}
                  name="name"
                />
                <p className="">{userProfe.username}</p>

                {userProfe.selectedOptionDeveloper.map((e, i) => (
                  <p key={i}>{e.value}</p>
                ))}
                {userProfe.selectedOptionSysAdmin.map((e, i) => (
                  <p key={i}>{e.value}</p>
                ))}
                <p className="">{userProfe.mail}</p>
                <p className="">{userProfe.description}</p>

                {/* <button onClick={() => thishandleClase()}> Quiero una Clase</button> */}
                <Link to="/newclase">Pideme una Clase</Link>
              </div>
            )}
          </div>
        ) : (
          <div>
            <img className="" src={userProfe.imgPath} alt="foto" />
            <input
              type="file"
              onChange={e => this.handleImgChange(e)}
              name="name"
            />
            <p className="">{userProfe.username}</p>

            {userProfe.selectedOptionDeveloper.map((e, i) => (
              <p key={i}>{e.value}</p>
            ))}
            {userProfe.selectedOptionSysAdmin.map((e, i) => (
              <p key={i}>{e.value}</p>
            ))}
            <p className="">{userProfe.mail}</p>
            <p className="">{userProfe.description}</p>

            {/* <button onClick={() => thishandleClase()}> Quiero una Clase</button> */}
            <Link to="/newclase">Pideme una Clase</Link>
          </div>
        )}
      </div>
    );
  }
}

export const PerfilUser = connect(store => store)(withRouter(_PerfilUser));
