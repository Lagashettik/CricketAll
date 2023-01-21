import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { scoreCardReducer } from "../screens/dashboard/reducer";
import rootSaga from "./rootSaga";

const rootReducers = combineReducers({scoreCardReducer});

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;