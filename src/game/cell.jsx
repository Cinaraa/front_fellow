import React from 'react';

const Cell = ({ id, name, price }) => {
  return (
    <div className="cell border-cell" id={id}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Cell;