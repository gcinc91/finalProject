import React from "react";

export const MisClases = ({ clases }) => {
  return (
    <div>
      {clases.map((e) => (
        <div>
        <p>e.description</p>
        <p>e.date</p>
        </div>
      ))}
    </div>
  );
};
