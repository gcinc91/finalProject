import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



export class _PerfilUser extends React.Component {


  thishandleClase(e){

  }
  
  render(){
    const { user } = this.props;


  return (
  <div className="">  
    <img className="" src={user.imgPath} alt='foto'/>
    <p className="">{user.username}</p>

    {user.selectedOptionDeveloper.map((e, i) => 
      <p key={i}>{e.value}</p>
    )}
    {user.selectedOptionSysAdmin.map((e, i) => 
      <p key={i}>{e.value}</p>
    )}
    <p className="">{user.mail}</p>
    <p className="">{user.description}</p>

    {/* <button onClick={() => thishandleClase()}> Quiero una Clase</button> */}
    <Link to="/newclase">Pideme una Clase</Link>
    
  </div>
  )}
};

export const PerfilUser = connect(store => store)(_PerfilUser);