import { combineReducers } from "redux";

// Import all reducers
import footballersReducer from "./footballersReducer";

const reducers = combineReducers({
    data: footballersReducer,
})

export default reducers;