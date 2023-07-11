import { combineReducers } from "redux";
import gameListReducers from "./gameListReducers";

const reducers = combineReducers({
  data: gameListReducers,
});

export default reducers;
