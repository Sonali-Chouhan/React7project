import { createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducer/index';
import mySaga from "./Saga/mySaga"
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, 
    applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(mySaga)