import { combineReducers } from 'redux';

import * as types from '../types';

const initialState = {
  interventions: [],
};

export const interventions = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INTERVENTIONS_FULFILLED:
      return {
        ...state,
        interventions: [
          ...state.interventions,
          ...action.payload
        ],
      }
    case types.CREATE_INTERVENTION_FULFILLED:
      return {
        ...state,
        interventions: [
          ...state.interventions,
          {
            id: state.interventions.length + 1,
            ...action.payload,
          },
        ],
      }
    default:
      // TODO - Manage error cases
      return state
  }
}

export default () => combineReducers({
  interventions,
});
