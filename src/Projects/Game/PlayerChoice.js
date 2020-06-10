import React from 'react';

function PlayerChoice(props) {
  return (
    <img
      src={props.image}
      style={{ width: 200, margin: 10 }}
	  onClick={() => props.onClick(props.name)}
	  alt={props.name}
    />
  );
}

export default PlayerChoice;