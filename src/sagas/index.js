import { takeLatest, all, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types';
import config from "../config";

const baseUrl = config.api.url;

function* getInterventions() {
  try {
    const interventions = yield call(() => {
        return axios.get(`${baseUrl}/interventions`)
          .then(res => res.data)
      }
    );
    yield put({
      type: types.GET_INTERVENTIONS_FULFILLED,
      payload: interventions,
    });
  } catch (error) {
    yield put({
      type: types.GET_INTERVENTIONS_ERROR,
      payload: error,
    });
  }
}

function* createIntervention(action) {
  try {
    // Following the instructions requested, there is no API call.
    yield put({
      type: types.CREATE_INTERVENTION_FULFILLED,
      payload: action.intervention,
    });
  } catch (error) {
    yield put({
      type: types.CREATE_INTERVENTION_ERROR,
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INTERVENTIONS, getInterventions),
    takeLatest(types.CREATE_INTERVENTION, createIntervention)
  ])
}
