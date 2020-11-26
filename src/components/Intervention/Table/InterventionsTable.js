import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './InterventionsTable.scss';
import {InterventionItem} from "./Item/InterventionItem";
import {INTERVENTIONS_TABLE_HEADER, SORT_STATES} from "../../../services/constants";

/**
 * Manage the display of interventions in a table
 * @param getInterventions Function
 * @param interventions Array
 * @returns {boolean|JSX.Element}
 * @constructor
 */
const InterventionsTable = ({ interventions = [] }) => {
  const [interventionDatas, setInterventionDatas] = useState(interventions);
  const [sortState, setSortState] = useState(SORT_STATES[0]);

  /**
   * Copy the state of the props so as not to interfere with it
   */
  useEffect(() => {
    if (interventions.length > 0) {
      setInterventionDatas(interventions);
    }
  }, [interventions]);

  /**
   * Manage the order of data according to the state of sortState
   */
  useEffect(() => {
    switch (sortState) {
      case SORT_STATES[1]:
        setInterventionDatas((interventionDatas) => {
          return [...interventionDatas].reverse();
        });
        break;
      case SORT_STATES[0]:
      default:
        setInterventionDatas(interventions);
        break;
    }
  }, [sortState]);

  /**
   * Function called by clicking on the Date button to change the order of the data
   */
  const sortData = () => {
    const index = SORT_STATES.includes(SORT_STATES[SORT_STATES.indexOf(sortState) + 1])
      ? SORT_STATES.indexOf(sortState) + 1 : 0;
    setSortState(SORT_STATES[index]);
  };

  return interventionDatas.length > 0 && (
    <table id="interventions">
      <thead>
        <tr>
          {
            Object.values(INTERVENTIONS_TABLE_HEADER).map((value, index) => {
              return (
                <th key={index}>
                  <div className="table-header">
                    {value.toUpperCase()}
                    {value === INTERVENTIONS_TABLE_HEADER.date
                    && (
                      <div onClick={sortData} id="date-filter">
                        <span className="sort initial" />
                        <span className="sort reverse" />
                      </div>
                    )}
                  </div>
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          interventionDatas.map((intervention, index) => {
            return (<InterventionItem key={index} intervention={intervention} />);
          })
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (store) => {
  return {
    ...store.interventions,
  };
};

export default connect(
  mapStateToProps,
  null,
)(InterventionsTable);
