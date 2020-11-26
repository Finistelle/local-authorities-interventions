import React, {useEffect} from 'react';
import {INTERVENTIONS_TABLE_HEADER} from "../../../services/constants";
import {formatPhone} from "../../../services/services";
import './InterventionDetail.scss';
import Intervention from "../../../containers/Intervention";
import {useSelector} from "react-redux";
import {ROUTES} from "../../../services/config";

/**
 * Displays the details of an intervention.
 * The data is stored on the store interventions.
 * Therefore the data created will no longer exist once the page has been reloaded.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const InterventionDetail = (props) => {
  const { history, match: { params : {id} } } = props;
  const interventions = useSelector(
    (store) => (
      store.interventions.interventions
      && store.interventions.interventions.find((intervention) => intervention.id.toString() === id)
    )
  );
  const intervention = {
    ...interventions,
  };

  /**
   * Improves the user experience, because when the page reloads, the data no longer exists
   */
  useEffect(() => {
    if (Object.values(intervention).length === 0) {
      history.push(ROUTES.home);
    }
  },[]);

  return (
    <Intervention {...props}>
      {
        Object.values(intervention).length > 0 && (
          <div className="detail-container">
            <h5>{intervention.name}</h5>
            <h6>{INTERVENTIONS_TABLE_HEADER.description.toUpperCase()}</h6>
            <p className="description">{intervention.description}</p>
            <h6>{INTERVENTIONS_TABLE_HEADER.sender.toUpperCase()}</h6>
            <div className="sender-container">
              <span className="sender-name">{intervention.sender_name}</span>
              <span className="informations">{intervention.sender_email}</span>
              <span className="informations">
                {intervention.sender_phone && formatPhone(intervention.sender_phone)}
              </span>
            </div>
          </div>
        )
      }
    </Intervention>
  );
};

export default InterventionDetail;
