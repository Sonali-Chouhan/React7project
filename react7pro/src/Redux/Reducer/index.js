import { combineReducers } from 'redux'
import {sagaReducer} from "./ReducerSaga"
import{Fromreducer} from "./fromReducer"
 const rootReducer = combineReducers({
sagaReducer,
Fromreducer


})
export default rootReducer;