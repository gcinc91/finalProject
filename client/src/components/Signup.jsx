import React, { Component } from "react";
import Input from "./Input";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";
import { login } from "../lib/Redux/actions";
import Select from 'react-select';


const optionsDeveloper = [
  { value: 'React', label: 'React' },
  { value: 'Redux', label: 'Redux' },
  { value: 'Java', label: 'Java' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Vue', label: 'Vue' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'SASS', label: 'SASS' },
  { value: 'Python', label: 'Python' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'React Native', label: 'React Native' }
];

const optionsSysAdmin =[
  { value: 'AD', label: 'AD' },
  { value: 'Citrix', label: 'Citrix' },
  { value: 'Rethat', label: 'Rethat' },
  { value: 'CentOs', label: 'CentOs' },
  { value: 'Solaris', label: 'Solaris' },
  { value: 'DNS', label: 'DNS' },
  { value: 'DHCP', label: 'DHCP' }

]

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
    const { username, password, mail, description, selectedOptionDeveloper, selectedOptionSysAdmin } = this.state;
    const { dispatch, history } = this.props;
    AuthAPI.signup(username, password, mail, description, selectedOptionDeveloper, selectedOptionSysAdmin)
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

  handleChangeDeveloper = (selectedOptionDeveloper) => {
    this.setState({ selectedOptionDeveloper });
    console.log(`Option selected:`, selectedOptionDeveloper);
  }

  handleChangeSysAdmin = (selectedOptionSysAdmin) => {
    this.setState({ selectedOptionSysAdmin });
    console.log(`Option selected:`, selectedOptionSysAdmin);
  }

  render() {
    const {selectedOptionDeveloper, selectedOptionSysAdmin} = this.state;
    return (
      <div>
        <Input
          text="Name"
          placeholder="pepe"
          onChange={e => this.handleName(e)}
        />
        <Input
          text="Password"
          placeholder="1234"
          type="password"
          onChange={e => this.handlePass(e)}
        />
        <Input
          text="Mail"
          placeholder="pepe@conocimiento.com"
          type="mail"
          onChange={e => this.handleMail(e)}
        />


        <div class="field" style={{maxWidth: 500}}>
          <div class="control">
          <label>Description</label>  
            <textarea onChange={(e) => this.handleDescription(e)} class="textarea is-info" placeholder="Tell me about you and your wishes and what can you contribute..." />
          </div>
        </div>
        <div  style={{maxWidth: 500}}>
        <label>Your programming skills</label>  
        <Select
        style={{maxWidth: 500}}
        value={selectedOptionDeveloper}
        onChange={this.handleChangeDeveloper}
        options={optionsDeveloper}
        isMulti
        />
        <label>Your systems knowledge</label> 
        <Select
        style={{maxWidth: 500}}
        value={selectedOptionSysAdmin}
        onChange={this.handleChangeSysAdmin}
        options={optionsSysAdmin}
        isMulti
        />

        </div>

        
        

      

        <button onClick={() => this.handleSubmit()}>Registrate</button>

        <div>
          <span> {JSON.stringify(this.state)}</span>
        </div>
      </div>
    );
  }
}

export const Signup = connect(store => store)(_Signup);


