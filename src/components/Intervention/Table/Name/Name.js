import React from 'react';
import * as moment from "moment";
import './Name.scss';

export const Name = (props) => {
  const { name, created_at } = props;
  return (
    <div className="name-container">
      <span className="name">{name}</span>
      <span className="date">{moment(created_at).format('DD/MM/YYYY HH:mm')}</span>
    </div>
  );
};
