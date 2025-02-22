import {
  MODAL_HALL_REQUEST_CONFIRM_OPEN,
  MODAL_HALL_REQUEST_CONFIRM_CLOSE,
  MODAL_QUERY_CONFIRM_OPEN,
  MODAL_QUERY_CONFIRM_CLOSE,
} from "../constants/";

export const openHallRequestConfirmModal = () => {
  return {
    type: MODAL_HALL_REQUEST_CONFIRM_OPEN,
    payload: true
  }
}

export const closeHallRequestConfirmModal = () => {
  return {
    type: MODAL_HALL_REQUEST_CONFIRM_CLOSE,
    payload: false
  }
}

export const openQueryConfirmModal = () => {
  return {
    type: MODAL_QUERY_CONFIRM_OPEN,
    payload: true
  }
}

export const closeQueryConfirmModal = () => {
  return {
    type: MODAL_QUERY_CONFIRM_CLOSE,
    payload: false
  }
}
