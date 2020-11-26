import * as types from '../types';

export const getInterventions = () => ({
  type: types.GET_INTERVENTIONS,
});

export const createIntervention = (intervention) => ({
  type: types.CREATE_INTERVENTION,
  intervention,
});
