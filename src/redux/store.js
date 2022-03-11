import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import timeReducer from "./timeReducer";
import weatherReducer from "./weatherReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
    locationReducer,
    timeReducer,
    weatherReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;