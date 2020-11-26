import React, {useEffect} from 'react';
import InterventionsTable from "../components/Intervention/Table/InterventionsTable.js";
import {bindActionCreators} from "redux";
import {getInterventions} from "../actions";
import {connect} from "react-redux";
import {ROUTES} from "../services/config";
import {useHistory} from "react-router-dom";
import './InterventionsList.scss';

/**
 * Parent container to display the list of interventions.
 * It is by this component that the API is called
 * @param getInterventions
 * @param interventions
 * @returns {JSX.Element}
 * @constructor
 */
const InterventionsList = ({ getInterventions, interventions = [] }) => {
  const history = useHistory();

  /**
   * Make the API call when loading the component
   */
  useEffect(() => {
    if (interventions.length === 0) {
      getInterventions();
    }
  }, [interventions]);

  return (
    <div className="list-container">
      <div className="actions">
        <button onClick={() => history.push(ROUTES.create)}>Créer une intervention</button>
        <p>{`${interventions?.length} interventions`}</p>
      </div>
      <InterventionsTable />
    </div>
  );
}

const mapStateToProps = (store) => {
  return { ...store.interventions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getInterventions}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InterventionsList);
