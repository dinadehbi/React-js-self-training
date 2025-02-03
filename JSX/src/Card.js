// src/components/Card.js
import React from 'react';

function Card(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Card;