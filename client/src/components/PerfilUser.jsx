import React from "react";

export const PerfilUser = ({username, selectedOptionDeveloper ,selectedOptionSysAdmin, imgPath, mail, description}) => {
  // const {username, selectedOptionDeveloper ,selectedOptionSysAdmin, imgPath, mail, description} = props;

  return (
  <div className="">  
    <img className="" src={imgPath} alt='foto'/>
    <p className="">{username}</p>

    {selectedOptionDeveloper.map((e, i) => 
      <p key={i}>{e.value}</p>
    )}
    {selectedOptionSysAdmin.map((e, i) => 
      <p key={i}>{e.value}</p>
    )}
    <p className="">{mail}</p>
    <p className="">{description}</p>
    
  </div>)
};