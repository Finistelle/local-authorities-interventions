import React from 'react';
import './Intervention.scss';
import {ROUTES} from "../services/config";

/**
 * Parent container to display the action buttons dynamically according to the current route
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Intervention = (props) => {
  const {
    history,
    location: { pathname },
    children,
    handleSubmit,
  } = props;

  return (
    <div className="detail-main-container">
      <div className="action-container">
        <button className="cancel" onClick={() => history.push(ROUTES.home)}>
          {pathname === ROUTES.create ? 'Annuler' : 'Retour'}
        </button>
        {pathname === ROUTES.create
        && (<button className="create-action" onClick={handleSubmit}>Créer</button>)}
      </div>
      {children}
    </div>
  );
};

export default Intervention;
