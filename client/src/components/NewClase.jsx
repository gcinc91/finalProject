import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../lib/Redux/actions";
import Select from "react-select";
import styled from "styled-components";
import {Navbar} from '../components/Navbar'
import { GetData } from "../lib/getData";

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



export class _NewClase extends Component {
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
    } = this.state;
    const { dispatch, history } = this.props;
    GetData.signup(
      username,
      password,
      mail,
      description,
    )
      .then(user => {
        dispatch(login(user));
      }, history.push("/"))
      .catch(e => console.log("catch de handlesubmit" + e));
  }

  handleName(e) {
    this.setState({ username: e.target.value });
  }
  handleMail(e) {
    this.setState({ mail: e.target.value });
  }
  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  

  render() {
   
    return (
      <div>
        <Navbar />
        <div className="signupGeneral margenVertical">
          <Title>
            <div className="form_logo">
              <span>K-</span>Transfer
            </div>
            <div className="form_title">
              <span>C</span>lase
            </div>
          </Title>
          <div className="field">
            <div className="control margenAbajo">
              <label>Fecha y Hora</label>
              <input type="datetime-local" className="input is-info"  min="2018-12-22T00:00"/>
            </div>
          </div>

          <div className="field" style={{ maxWidth: 500 }}>
            <div className="control ancho margenAbajo">
              <label className="margenAbajo">Que quieres aprender!?</label>
              <textarea
                onChange={e => this.handleDescription(e)}
                className="textarea is-info"
                placeholder="Quisiera que me enseñaras a programar en HTML..."
              />
            </div>
          </div>
        
          <Btn className="main">
            <button onClick={() => this.handleSubmit()} className="button">
              Enviar
            </button>
          </Btn>
        </div>
      </div>
    );
  }
}

export const NewClase = connect(store => store)(_NewClase);
