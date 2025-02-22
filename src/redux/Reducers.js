import { combineReducers } from "redux";
import activity from './activity/Reducer';
import board from './board/Reducer';
import modals from './modals/Reducer';


const Reducers = combineReducers({
  activity,
  board,
  modals,
});

export default Reducers;
