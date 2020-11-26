import React from 'react';
import './Sender.scss';
import {formatPhone} from "../../../../services/services";

export const SenderComponent = (props) => {
  const { sender_email, sender_phone } = props;

  return (
    <div className="sender-container">
      <span>{sender_email}</span>
      <span>{sender_phone && formatPhone(sender_phone)}</span>
    </div>
  );
};
