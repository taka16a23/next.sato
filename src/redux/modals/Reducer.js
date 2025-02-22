import {
  MODAL_HALL_REQUEST_CONFIRM_OPEN,
  MODAL_HALL_REQUEST_CONFIRM_CLOSE,
  MODAL_QUERY_CONFIRM_OPEN,
  MODAL_QUERY_CONFIRM_CLOSE,
} from "../constants/";

const INIT_STATE = {
  hallRequestConfirmModalIsOpen: false,
  queryConfirmModalIsOpen: false,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MODAL_HALL_REQUEST_CONFIRM_OPEN:
      return {
        ...state,
        hallRequestConfirmModalIsOpen: true,
      };
    case MODAL_HALL_REQUEST_CONFIRM_CLOSE:
      return {
        ...state,
        hallRequestConfirmModalIsOpen: false,
      };
    case MODAL_QUERY_CONFIRM_OPEN:
      return {
        ...state,
        queryConfirmModalIsOpen: true,
      };
    case MODAL_QUERY_CONFIRM_CLOSE:
      return {
        ...state,
        queryConfirmModalIsOpen: false,
      };
    default:
      return state;
  }
};
