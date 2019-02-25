import React from "react";

export const CardUser = ({props}) => {
  const {username, selectedOptionDeveloper ,selectedOptionSysAdmin,imgPath,mail, description,create_at,puntiation} = props;



  return (
  <div className='box'>  
    <img className="" src={imgPath} alt='fotoUsuario'/>
    <p className="">{username}</p>
    <p className="">{selectedOptionDeveloper[0].value}</p>
    <p className="">{selectedOptionSysAdmin[0].value}</p>
    <p className="">{description}</p>
    <p className="">{mail}</p>
    
  </div>
  )};