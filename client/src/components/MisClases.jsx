import React from "react";
import { Link } from "react-router-dom";
const moment = require("moment");


export const MisClases = ({ clases }) => {
  console.log('clases')
  console.log(clases)
  return (
    <div>
      {clases.map((clase) => (
        <div>
        <p>{clase.description}</p>
        <p>{moment(clase.date).add(1, 'day').format('LLL')}</p>
        <Link to={`/vcall/${clase._id}`}>
        <button className="button is-link is-medium ">Ir a la clase</button>
      </Link>
        </div>
      ))}
    </div>
  );
};
