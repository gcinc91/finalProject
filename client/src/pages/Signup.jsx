import React, { Component } from "react";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import { login } from "../lib/Redux/actions";
import Select from "react-select";
import styled from "styled-components";
import {Navbar} from '../components/Navbar'

const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://fonts.googleapis.com/css?family=Lobster");

  .form_logo {
    font-family: "Lobster", cursive;
    font-size: 40px;
    font-size: 2.5rem;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
  }

  .form_logo span {
    color: #436b95;
  }

  .form_title {
    font-weight: bold;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
  }

  .form_title span {
    color: #436b95;
  }
`;

const Btn = styled.div`
  * {
    box-sizing: border-box;
  }

  .button {
    position: relative;
    display: block;
    width: 200px;
    height: 36px;
    border-radius: 18px;
    background-color: #436b95;
    border: solid 1px transparent;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: transparent;
      border-color: #1c89ff;
      transition: all 0.1s ease-in-out;
    }
  }
`;

const optionsDeveloper = [
  { value: "React", label: "React" },
  { value: "Redux", label: "Redux" },
  { value: "Java", label: "Java" },
  { value: "Angular", label: "Angular" },
  { value: "Vue", label: "Vue" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "SASS", label: "SASS" },
  { value: "Python", label: "Python" },
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "C#", label: "C#" },
  { value: "React Native", label: "React Native" }
];

const optionsSysAdmin = [
  { value: "AD", label: "AD" },
  { value: "Citrix", label: "Citrix" },
  { value: "Rethat", label: "Rethat" },
  { value: "CentOs", label: "CentOs" },
  { value: "Solaris", label: "Solaris" },
  { value: "DNS", label: "DNS" },
  { value: "DHCP", label: "DHCP" }
];

export class _Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      mail: "",
      description: "",
      selectedOptionDeveloper: null,
      selectedOptionSysAdmin: null
    };
  }

  handleSubmit() {
    const {
      username,
      password,
      mail,
      description,
      selectedOptionDeveloper,
      selectedOptionSysAdmin
    } = this.state;
    const { dispatch, history } = this.props;
    AuthAPI.signup(
      username,
      password,
      mail,
      description,
      selectedOptionDeveloper,
      selectedOptionSysAdmin
    )
      .then(user => {
        dispatch(login(user));
      }, history.push("/"))
      .catch(e => console.log("catch de handlesubmit" + e));
  }

  handleName(e) {
    this.setState({ username: e.target.value });
  }
  handlePass(e) {
    this.setState({ password: e.target.value });
  }
  handleMail(e) {
    this.setState({ mail: e.target.value });
  }
  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleChangeDeveloper = selectedOptionDeveloper => {
    this.setState({ selectedOptionDeveloper });
    console.log(`Option selected:`, selectedOptionDeveloper);
  };

  handleChangeSysAdmin = selectedOptionSysAdmin => {
    this.setState({ selectedOptionSysAdmin });
    console.log(`Option selected:`, selectedOptionSysAdmin);
  };

  render() {
    const { selectedOptionDeveloper, selectedOptionSysAdmin } = this.state;
    return (
      <div>
        <Navbar />
        <div className="signupGeneral margenVertical">
          <Title>
            <div className="form_logo">
              <span>K-</span>Transfer
            </div>
            <div className="form_title">
              <span>S</span>ingup
            </div>
          </Title>
          <div className="field">
            <div className="control margenAbajo">
              <label>Username</label>
              <input
                className="input is-info"
                placeholder="pepe"
                onChange={e => this.handleName(e)}
              />
              <label>Password</label>
              <input
                className="input is-info"
                placeholder="1234"
                type="password"
                onChange={e => this.handlePass(e)}
              />
              <label>Mail</label>
              <input
                className="input is-info"
                placeholder="pepe@conocimiento.com"
                type="mail"
                onChange={e => this.handleMail(e)}
              />
            </div>
          </div>

          <div className="field" style={{ maxWidth: 500 }}>
            <div className="control ancho margenAbajo">
              <label className="margenAbajo">Description</label>
              <textarea
                onChange={e => this.handleDescription(e)}
                className="textarea is-info"
                placeholder="Tell me about you and your wishes and what can you contribute..."
              />
            </div>
          </div>
          <div className="ancho" style={{ maxWidth: 500 }}>
            <label>Your programming skills</label>
            <Select
              style={{ maxWidth: 500 }}
              value={selectedOptionDeveloper}
              onChange={this.handleChangeDeveloper}
              options={optionsDeveloper}
              isMulti
            />
            <label>Your systems knowledge</label>
            <Select
              style={{ maxWidth: 500 }}
              value={selectedOptionSysAdmin}
              onChange={this.handleChangeSysAdmin}
              options={optionsSysAdmin}
              isMulti
            />
          </div>
          <Btn className="main">
            <button onClick={() => this.handleSubmit()} className="button">
              Signup
            </button>
          </Btn>
        </div>
      </div>
    );
  }
}

export const Signup = connect(store => store)(_Signup);
