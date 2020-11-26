import React from 'react';
import * as moment from "moment";
import './Date.scss';

export const Date = (props) => {
  const { created_at } = props;
  const dateFormat = moment(created_at).format('MMM');
  const date = dateFormat.length > 3 ? dateFormat.slice(0, -1).toUpperCase() : dateFormat.toUpperCase();

  return (
    <div className="date-container">
      <p className="day">{moment(created_at).format('DD')}</p>
      <p className="month">{date}</p>
    </div>
  );
};
