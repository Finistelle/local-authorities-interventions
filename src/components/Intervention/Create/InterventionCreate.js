import React, {useState} from 'react';
import Intervention from "../../../containers/Intervention";
import './InterventionCreate.scss';
import {INTERVENTION_KEYS} from "../../../services/constants";
import {RULES} from "../../../services/rules";
import * as moment from 'moment';
import {createIntervention} from "../../../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ROUTES} from "../../../services/config";

/**
 * Created and validated the fields of a new intervention.
 * The data is stored on the store interventions.
 * Therefore the data created will no longer exist once the page has been reloaded.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const InterventionCreate = (props) => {
  const [intervention, setIntervention] = useState({});
  const [errors, setErrors] = useState([]);
  const { createIntervention, history } = props;

  const handleSubmit = () => {
    validate();
  };

  const validate = () => {
    setErrors([]);
    const finalErrors = [];
    Object.values(INTERVENTION_KEYS).map((value) => {
      const valueKey = value.key;
      const check = intervention[valueKey];
      switch (valueKey) {
        case INTERVENTION_KEYS.senderEmail.key:
          if (RULES.isEmpty(check) || !RULES.isString(check) || !RULES.isEmail(check)) {
            finalErrors.push( value.label);
          }
          break;
        case INTERVENTION_KEYS.senderPhone.key:
          if (RULES.isEmpty(check) || !RULES.isString(check) || !RULES.isFrenchPhoneNumber(check)) {
            finalErrors.push(value.label);
          }
          break;
        case INTERVENTION_KEYS.name.key:
        case INTERVENTION_KEYS.description.key:
        case INTERVENTION_KEYS.senderName.key:
          if (RULES.isEmpty(check) || !RULES.isString(check)) {
            finalErrors.push(value.label);
          }
        default:
          break;
      }
    });
    if (finalErrors.length > 0) {
      setErrors([
        'Erreur sur un ou plusieurs champs',
        ...finalErrors,
      ]);
    } else {
      createIntervention(intervention);
      history.push(ROUTES.home);
    }
  };

  const handleChange = (value, key) => {
    if (key) {
      setIntervention({
        ...intervention,
        [INTERVENTION_KEYS.createdAt.key]: moment().format('YYYY-MM-DD HH:ss:mm'),
        [key]: value,
      });
    }
  };

  return (
    <Intervention handleSubmit={handleSubmit} {...props}>
      <div className="create-container">
        <p className="error">{errors.join(', ')}</p>
        <label>
          <p>{INTERVENTION_KEYS.name.label}</p>
          <input
            onChange={(event) => handleChange(event.target.value, INTERVENTION_KEYS.name.key)}
            type="text"
            placeholder={INTERVENTION_KEYS.name.placeholder}
          />
        </label>
        <label>
          <p>{INTERVENTION_KEYS.description.label}</p>
          <textarea
            onChange={(event) => handleChange(event.target.value, INTERVENTION_KEYS.description.key)}
            placeholder={INTERVENTION_KEYS.description.placeholder}
          />
        </label>
        <label>
          <p>{INTERVENTION_KEYS.senderName.label}</p>
          <input
            onChange={(event) => handleChange(event.target.value, INTERVENTION_KEYS.senderName.key)}
            type="text"
            placeholder={INTERVENTION_KEYS.senderName.placeholder}
          />
        </label>
        <label>
          <p>{INTERVENTION_KEYS.senderEmail.label}</p>
          <input
            onChange={(event) => handleChange(event.target.value, INTERVENTION_KEYS.senderEmail.key)}
            type="text"
            placeholder={INTERVENTION_KEYS.senderEmail.placeholder}
          />
        </label>
        <label>
          <p>{INTERVENTION_KEYS.senderPhone.label}</p>
          <input
            onChange={(event) => handleChange(event.target.value, INTERVENTION_KEYS.senderPhone.key)}
            type="text"
            placeholder={INTERVENTION_KEYS.senderPhone.placeholder}
          />
        </label>
      </div>
    </Intervention>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createIntervention}, dispatch);
};

export default connect(
  null,
  mapDispatchToProps,
)(InterventionCreate);
