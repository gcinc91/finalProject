import React from "react";

export const CardUser = ({ props }) => {
  const { username, imgPath, puntuation } = props;

  return (
    <div className="box">
      <div className="card">
        <div className='perfilContainer'>
        
            <img className='imgPerfil' src={imgPath} alt="foto_user" />
          
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"
                  alt="photo_tecnology"
                  className="item"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{username}</p>
              <p className="subtitle is-6">Rating: {puntuation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
