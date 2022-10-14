import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { rootreducer } from './reducer/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))