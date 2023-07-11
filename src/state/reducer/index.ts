import { combineReducers } from "redux";
import gameListReducers from "./gameListReducers";

const reducers = combineReducers({
  gameList: gameListReducers,
});

export default reducers;
