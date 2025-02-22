import {
  ACTIVITY_YEAR,
  ACTIVITY_MODELS,
} from "../constants/";

import moment from 'moment'


const INIT_STATE = {
  year: moment().year(),
  models: [],
};

const activity = (state = INIT_STATE, action) => {
  switch (action.type) {
  case ACTIVITY_YEAR:
    return {
      ...state,
      year: action.payload,
    };
  case ACTIVITY_MODELS:
    return {
      ...state,
      models: action.payload,
    };
  default:
    return state;
  }
};

export default activity;
