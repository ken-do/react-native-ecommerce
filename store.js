import { createStore, applyMiddleware  } from 'redux';
import reducer from './app/reducer';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));