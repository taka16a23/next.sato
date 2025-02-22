import {
  BOARD_YEAR,
  BOARD_MODELS,
} from "../constants/";

export const setBoardYear = (payload) => {
  return {
    type: BOARD_YEAR,
    payload
  }
}

export const setBoardModels = (payload) => {
  return {
    type: BOARD_MODELS,
    payload
  }
}
