import React, { Component } from "react";
import Input from './Input';
import { AuthAPI } from "../lib/auth";
import { connect } from 'react-redux';
import {  login  } from '../lib/Redux/actions';

  export class _Signup extends Component {


  constructor(){
    super()
    this.state = {
      username: "",
      password: "",
      // mail:"",
      // role:['principiante', 'medio', 'profesional'],
      // description:""
    }
  }

  handleSubmit(){
    const {username, password} = this.state;
    console.log(username, password)
    const {dispatch, history} = this.props;
    AuthAPI.signup( username, password)
    .then(user =>{
      dispatch(login(user))},
      history.push("/")
      )
    .catch(e => console.log('catch de handlesubmit'+ e))
  }

  handleName(e){
    this.setState({username: e.target.value})
  }
  handlePass(e){
    this.setState({password: e.target.value})
  }

  // handleImgChange = e => {
  //   const name = "a";
  //   let file = new FormData();
  //   file.set("name", name);
  //   file.append("photo", e.target.files[0], name);
  //   let { dispatch } = this.props;
  //   dispatch({ type: "IMG_UPLOAD", image: file });
  // };

  // handleUpload = e => {
  //   e.preventDefault();
  //   console.log(this.props.image);
  //   AuthAPI.upload(this.props.image).then(e => console.log("handle de cloudinary" + e));
  // };
  

  render() {

    return (
      <div>

        <Input text="Nombre" onChange={(e) => this.handleName(e)} />
        <Input text="Password" type='password' onChange={(e) => this.handlePass(e)}/>
        {/* <select>  
          {this.state.role.map(item => (
            <option key='item'>{item}</option>
          ))}
        </select> */}

        {/* <form>
              <input
                type="file"
                onChange={e => this.handleImgChange(e)}
                name="name"
              />
              <button onClick={e => this.handleUpload(e)}>SUBIR</button>
            </form> */}

        <button onClick={() => this.handleSubmit()}>Registrate</button>
      </div>
    );
  }
}


export const Signup = connect(store => store)(_Signup);