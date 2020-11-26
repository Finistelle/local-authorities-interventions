import React from 'react';
import {COMPONENTS} from "../../../../services/config";
import { useHistory } from "react-router-dom";
import './Item.scss';

/**
 * Corresponds to a row of the table. Generate the component based on the given key
 * @param intervention Object
 * @returns {JSX.Element}
 * @constructor
 */
export const InterventionItem = ({ intervention }) => {
  const history = useHistory();
  return (
    <tr className="item" onClick={() => history.push(`/intervention/${intervention.id}`)}>
      {Object.keys(intervention).map((item, index) => {
        if (Object.keys(COMPONENTS).includes(item)) {
          let argumentsComponent = {};
          COMPONENTS[item].args.forEach((key) => {
            argumentsComponent = {
              ...argumentsComponent,
              [key]: intervention[key],
            }
          });
          return (
            <td key={index}>
              {React.createElement(COMPONENTS[item].component, argumentsComponent)}
            </td>
          );
        }
      })}
    </tr>
  );
};
