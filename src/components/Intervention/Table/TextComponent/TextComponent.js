import React from 'react';
import './TextComponent.scss';

export const TextComponent = (props) => {
  return (
    <div className="text-component">
      {Object.values(props).map((prop, index) => <p className="text-content" key={index}>{prop}</p>)}
    </div>
  );
};
