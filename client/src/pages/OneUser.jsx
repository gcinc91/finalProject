import React from "react";
import { connect } from "react-redux";
import { Navbar } from "../components/Navbar";
import { GetData } from "../lib/getData";
import {PerfilUser} from '../components/PerfilUser'

class _OneUser extends React.Component {

  constructor(){
    super()
    this.state = {
      userProfe: ''
    }
  }
  thishandleClase(e) {}
  

  componentDidMount(){
    const {id} = this.props.match.params;
    GetData.user(id).then(user => {
      this.setState({userProfe: user})
    }) 
  }



  render() {
    const { user } = this.props;
    const {userProfe} = this.state;
    const {id} = this.props.match.params;
    return (
      <div className="">
        <Navbar />
        {userProfe ?
           <PerfilUser userProfe={userProfe}/>
           :
           null
        }
       
      </div>
    );
  }
}

export const OneUser = connect(store => store)(_OneUser);
