import {
  ACTIVITY_YEAR,
  ACTIVITY_MODELS,
} from "../constants/";

export const setActivityYear = (payload) => {
  return {
    type: ACTIVITY_YEAR,
    payload
  }
}

export const setActivityModels = (payload) => {
  return {
    type: ACTIVITY_MODELS,
    payload
  }
}
