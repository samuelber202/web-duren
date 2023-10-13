// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import beritaAction from './reducers/beritaReducer';
import pengumumanAction from './reducers/pengumumanReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  berita: beritaAction,
  pengumuman: pengumumanAction
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
