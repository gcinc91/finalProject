import React from "react";

export const CardUser = ({ props }) => {
  const {
    username,
    imgPath,
    description,
    puntuation,
    create_at
  } = props;


  return (
    
    <div className='box'>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src="http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"
              alt="photo_user"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={imgPath} alt="foto" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{username}</p>
              <p className="subtitle is-6">Rating: {puntuation}</p>
            </div>
          </div>

          <div className="content ">
            {description}
            <p href="#">#responsive</p>
            <br />
            <time>
              Compartiendo conocimiento desde {create_at}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};
