// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import beritaReducer from './reducers/beritaReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  berita: beritaReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
