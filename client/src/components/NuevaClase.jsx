import React from 'react';
import styled from "styled-components";
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
`

export class NuevaClase extends React.Component{
constructor(){
  super()

  this.state = {
    date: null,
    description: "",
    message: null
  }
}

handleSubmit() {
  const {
    date,
    description
  } = this.state;
  const {_id} = this.props.props;
  const idUserLogin = this.props.userLogin._id;
  const idProfe = _id;
  console.log(idUserLogin)
  GetData.newclase(
    date,
    description,
    idProfe,
    idUserLogin
  )
    .then(clase => {
      console.log(clase)
      if(clase.message){
        this.setState({ message: clase.message });
          return;
      }
      console.log('Creada nueva clase con exito')
    })
    .catch(e => console.log("catch de handlesubmit de newclase " + e));
}

handleDescription(e) {
  this.setState({ description: e.target.value });
}
handleTime(e) {
  this.setState({ date: e.target.value });
}


  render(){
    const {message} = this.state;
    return(
      <div>
        <div className="signupGeneral margenVertical">
          <Title>
            <div className="form_logo">
              <span>K-</span>Transfer
            </div>
            <div className="form_title">
            <p><span>P</span>eticion   <span>C</span>lase</p>
            </div>
          </Title>
          <div className="field">
            <div className="control margenAbajo">
              <label>Fecha y Hora</label>
              <input onChange={e => this.handleTime(e)} type="datetime-local" className="input is-info"  min="2018-12-22T00:00"/>
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
          {message ? (
              <div>
                <br/>
                <h1>{message}</h1>
              </div>
        ) : null}
        </div>
      </div>
    )
  }
}