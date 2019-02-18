import React, { Component } from "react";
import { login } from "../lib/Redux/actions";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import styled from "styled-components";
import {Navbar} from './Navbar'

const LoginForm = styled.div`

  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://fonts.googleapis.com/css?family=Lobster");

  body {
    color: #fff;
    background: #222;
    font-family: "Open Sans", sans-serif;
    display:flex;
    align-items: center;
    color:black;
  }

  .form {
    width: 256px;
    width: 16rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    align-content: center;
  }

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

  .form_items {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  .form_inputs {
    width: 256px;
    width: 16rem;
    color: rgb(189, 189, 189);
    margin: 16px 0;
    margin: 1rem 0;
    position: relative;
  }

  .form_inputs label {
    font-size: 16px;
    position: absolute;
    top: 10px;
    left: 0;
    pointer-events: none;
    transition: all 0.15s ease;
  }

  .form_inputs input {
    width: 100%;
    height: 36px;
    background: inherit;
    border: none;
    border-bottom: 1px solid;
    color: black;
  }

  .form_inputs input:focus,
  .form_inputs input:valid {
    outline: none;
    border-width: 2px;
    margin-bottom: -1px;
    border-color: #436b95;
  }

  .form_inputs input:focus + label,
  .form_inputs input:valid + label {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    font-size: 70%;
    color: #436b95;
  }

  .form_button {
    width: 300px;
    height: 36px;
    margin-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border: none;
    border-radius: 2px;
    color: white;
    background: #436b95;
    box-shadow: 2px 2px 2px rgb(119, 136, 153);
    display:flex;
    justify-content:center;
    align-items: center;

  }

  .form_button:focus {
    outline: none;
  }

  .form_button:active {
    outline: none;
    background: rgb(244, 244, 244);
  }
  .centro{
    display:flex;
    justify-content:center;
    align-items: center;
  }
`;

export class _Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin() {
    const { username, password } = this.state;
    const { dispatch, history } = this.props;
    AuthAPI.login(username, password)
      .then(user => {
        dispatch(login(user));
      }, history.push("/"))
      .catch(e => "have problems! " + e);
  }

  render() {
    return (
      <div>
      <Navbar />
      <LoginForm className="form margenVertical">
        <div className="form_logo">
        <span>K-</span>Transfer
        </div>
        <div className="form_title">
          <span>L</span>ogin
        </div>
        <div className="form_items">
          <div className="form_inputs">
            <input
              onChange={e => this.setState({ username: e.target.value })}
            />
            <label>Name</label>
          </div>

          <div className="form_inputs">
            <input
              type="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <label>password</label>
          </div>
        </div>
        <div className='centro'>
        <button className="form_button" onClick={() => this.handleLogin()}>
          Login
        </button>
        </div>
      </LoginForm>
      </div>
    );
  }
}

export const Login = connect(store => store)(_Login);
