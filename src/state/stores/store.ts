import { legacy_createStore as createStore, applyMiddleware } from "redux";

// Import thunk middleware
import thunk from "redux-thunk";

// Import all reducers created
import reducers from "../reducer/index";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
