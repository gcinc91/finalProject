import React from "react";

export const CardUser = ({ props }) => {
  const {
    username,
    selectedOptionDeveloper,
    selectedOptionSysAdmin,
    imgPath,
    description,
    create_at,
    puntiation
  } = props;

  // console.log(selectedOptionDeveloper)
  // console.log(selectedOptionSysAdmin[0].value)

  return (
    // <div className='box'>
    //   <img className="" src={imgPath} alt='fotoUsuario'/>
    //   <p className="">{username}</p>

    //   {selectedOptionDeveloper.map((e,i) => {
    //     return <p key={i}>{e.value}</p>
    //   })}
    //   <p className="">{selectedOptionDeveloper[0].value}</p>
    //   <p className="">{selectedOptionSysAdmin[0].value}</p>
    //   <p className="">{description}</p>
    //   <p className="">{mail}</p>
    //   <p className="">{puntiation}</p>
    //   <p className="">{create_at}</p>

    // </div>
    
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
                <img src={imgPath} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{username}</p>
              <p className="subtitle is-6">Rating: {puntiation}</p>
            </div>
          </div>

          <div className="content ">
            {description}
            <a href="#">#responsive</a>
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
