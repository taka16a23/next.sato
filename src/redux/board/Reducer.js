import {
  BOARD_YEAR,
  BOARD_MODELS,
} from "../constants/";

import moment from 'moment'


const INIT_STATE = {
  year: moment().year(),
  models: [],
};

const board = (state = INIT_STATE, action) => {
  switch (action.type) {
  case BOARD_YEAR:
    return {
      ...state,
      year: action.payload,
    };
  case BOARD_MODELS:
    return {
      ...state,
      models: action.payload,
    };
  default:
    return state;
  }
};

export default board;
